import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DataShareService} from "../../services/data-share.service";
import {MatDialog} from "@angular/material/dialog";
import {ApiService} from "../../services/api.service";
import {Router} from "@angular/router";
import {UtilService} from "../../services/util.service";
import {AppConstants} from "../../AppConstants";
import {sha256} from "js-sha256";
import {switchMap} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {StripeService} from "ngx-stripe";


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orderId = ' ';
  private payLater = false;
  @ViewChild('pay') pay?: ElementRef
  currency = ' ';

  paymentData = {
    MERCHANT_AUTH_HASH: AppConstants.PAY_TRAIL_AUTH,
    MERCHANT_ID: AppConstants.PAY_TRAIL_MER_ID,
    URL_SUCCESS: AppConstants.PAY_TRAIL_SUCCESS,
    URL_CANCEL: AppConstants.PAY_TRAIL_FAILED,
    URL_NOTIFY: AppConstants.PAY_TRAIL_SUCCESS,
    ORDER_NUMBER: '',
    PARAMS_IN: 'MERCHANT_ID,URL_SUCCESS,URL_CANCEL,URL_NOTIFY,ORDER_NUMBER,PARAMS_IN,PARAMS_OUT,AMOUNT',
    PARAMS_OUT: 'PAYMENT_ID,ORDER_NUMBER,TIMESTAMP,STATUS',
    AMOUNT: 0, // 350.00
    AUTH_CODE: '',
  };


  constructor(private http: HttpClient, private stripeService: StripeService, public dataShare: DataShareService, public dialog: MatDialog, public api: ApiService, private router: Router, public utilService: UtilService) {
  }

  ngOnInit(): void {

  }


  saveOrder(type: number) {
    console.log('clicked here', this.dataShare.step1);
    let order = {
      email: '',
      name: '',
      first_name: '',
      middle_name: '',
      last_name: '',
      address: '',
      phone: '',
      post_code: '',
      city: '',
    }
    let placeOrder = false

    for (let el of this.dataShare.siteData.config.step1) {
      console.log('these are elements', el)
        if (el.dynamicData) {
          if (el.dynamicData.required && !(el.dynamicData.value)) {
            // error
            this.utilService.presentSnackBar('Please enter all required fields in step1')
            placeOrder = false
            return
          } else {
            placeOrder = true;
            if (el.type === 'text-box') {
              placeOrder = true
              this.dataShare.orderData.push({title: el.dynamicData.title, value: el.dynamicData.value})
            } else if (el.type === 'radio_button') {
              this.dataShare.orderData.push({title: el.dynamicData.title, value: el.dynamicData.value})
            } else if (el.type === 'check-box') {
              this.dataShare.orderData.push({title: el.dynamicData.title, value: el.dynamicData.value})
            }
          }
        }
      }
    console.log('this is order data after step 1 loop', this.dataShare.orderData);
    console.log('this is data of step 3', this.dataShare.siteData.config.step3);
    for (let el of this.dataShare.siteData.config.step3) {
      console.log('these are elements', el);
      if (el.dynamicData) {
          console.log('these are elements', el);
          if (el.dynamicData.required && !(el.dynamicData.value)) {
            placeOrder = false
            this.utilService.presentSnackBar('Please enter all required fields in step3')
            console.log('Required field missing step 3', this.dataShare.step3);
            return
          }
          else {
            placeOrder = true
            if (el.type === 'text-box') {
              if (el.dynamicData.type === 'email') {
                order.email = el.dynamicData.value
              } else if (el.dynamicData.type === 'name') {
                order.name = el.dynamicData.value
              } else if (el.dynamicData.type === 'first_name') {
                order.first_name = el.dynamicData.value
              } else if (el.dynamicData.type === 'last_name') {
                order.last_name = el.dynamicData.value
              } else if (el.dynamicData.type === 'middle_name') {
                order.middle_name = el.dynamicData.value
              } else if (el.dynamicData.type === 'address') {
                order.address = el.dynamicData.value
              } else if (el.dynamicData.type === 'phone') {
                order.phone = el.dynamicData.value
              } else if (el.dynamicData.type === 'post_code') {
                order.post_code = el.dynamicData.value
              } else if (el.dynamicData.type === 'city') {
                order.city = el.dynamicData.value
              }
              this.dataShare.orderData.push({title: el.dynamicData.title, value: el.dynamicData.value})

            } else if (el.type === 'text-area') {
              this.dataShare.orderData.push({title: el.dynamicData.title, value: el.dynamicData.value})
            } else if (el.type === 'radio_button') {
              this.dataShare.orderData.push({title: el.dynamicData.title, value: el.dynamicData.selectedValue})
            } else if (el.type === 'check-box') {
              this.dataShare.orderData.push({title: el.dynamicData.title, value: el.dynamicData.value})
            }
            console.log('this is is order data before placing', order);

          }
      }
    }

    if (placeOrder) {
      this.placeOrder(order, type)
    }
    console.log('this is order data after step 3 loop', this.dataShare.orderData);

    console.log('This is order Data', this.dataShare.orderData);
  }

  sendMail(order: any) {

    const body = {
      to: order.email,
      subject: 'This is test mail order placed',
      text: 'This is test mail order placed',
//       html: `<div>Hello order is placed successfully</div><div> Service:- ${this.dataShare.selectService?.name}</div>
//     <div>Total Price of product:- ${this.dataShare.totalPrice}</div>
//     <div> Date and Time:- ${this.utilService.getIndianDate(this.dataShare.contactForm.date)} - ${this.dataShare.contactForm.time}</div>
// <div>email:- ${order.email}</div>
// <div>name:- ${order.name}</div>
// <div>first_name:- ${order.first_name}</div>
// <div>last_name:- ${order.last_name}</div>
// <div>middle_name:- ${order.middle_name}</div>
// <div>address:- ${order.address}</div>
// <div>phone:- ${order.phone}</div>
// <div>post_code:- ${order.post_code}</div>
// <div>city:- ${order.city}</div>`
      html: 'This is test mail order placed'
    }
    this.api.sendMail(body).subscribe(data => {
      console.log('data', data)
    }, error => {
      console.log('Error occurred', error)
    })
  }

  /**
   * this function is used to place the order
   * @param orderData
   * @param type
   */
  placeOrder(orderData: any, type: number) {
    console.log('order Data', orderData)
    console.log('this is selected slot', this.dataShare.slotsSelected);
    const body = {
      products: this.dataShare.addProduct,
      services: [this.dataShare.selectService],
      payment: 'paytrail',
      additional: {},
      date: this.dataShare.contactForm.date,
      slot: this.dataShare.contactMe ? '' : this.dataShare.slotsSelected.id,
      name: orderData.name,
      contactMe: this.dataShare.contactMe,
      email: orderData.email,
      address: orderData.address,
      city: orderData.city,
      postcode: orderData.post_code,
      paid: true,
      total: this.dataShare.totalPrice,
      subtotal: this.dataShare.totalPrice
    }
    console.log('this is body *************', body)

    this.api.submitOrder(body).subscribe(data => {
      console.log('data', data)
      this.paymentData.ORDER_NUMBER = data.order.id;
      console.log('this is order id', this.paymentData.ORDER_NUMBER)
      this.sendMail(orderData);
      this.paymentData.AMOUNT = this.dataShare.totalPrice.toFixed(2);

      // uncomment the below line code
      type === 1 ? this.callPayTrail() : this.openStripe();
      console.log('this is pay data@@@@@@@@@@@', this.paymentData);

    }, error => {
      console.log('Error occurred', error)
    })
  }

  callPayTrail() {
    console.log('this is total', this.dataShare.totalPrice.toFixed(2))
    console.log('this is payment data', this.paymentData);

    this.paymentData.URL_SUCCESS = 'http://' + this.dataShare.siteData.domain + '/order-status/success'
    this.paymentData.URL_CANCEL = 'http://' + this.dataShare.siteData.domain + '/order-status/fail'
    this.paymentData.AMOUNT = this.dataShare.totalPrice.toFixed(2);
    this.paymentData.MERCHANT_AUTH_HASH = this.dataShare.siteData.apps.paytrailAuth;
    this.paymentData.MERCHANT_ID = this.dataShare.siteData.apps.paytrailMerId;
    const hashString = `${this.paymentData.MERCHANT_AUTH_HASH}|${this.paymentData.MERCHANT_ID}|${this.paymentData.URL_SUCCESS}|${this.paymentData.URL_CANCEL}|${this.paymentData.URL_NOTIFY}|${this.paymentData.ORDER_NUMBER}|MERCHANT_ID,URL_SUCCESS,URL_CANCEL,URL_NOTIFY,ORDER_NUMBER,PARAMS_IN,PARAMS_OUT,AMOUNT|PAYMENT_ID,ORDER_NUMBER,TIMESTAMP,STATUS|${this.paymentData.AMOUNT}`;
    sha256('Message to hash');
    console.log('Message to hash', hashString);
    const hash = sha256.create();
    hash.update(hashString);
    console.log('hash', hash.hex().toUpperCase());
    this.paymentData.AUTH_CODE = hash.hex().toUpperCase();
    const el: HTMLElement = this.pay?.nativeElement;
    setTimeout(() => {
      el.click();
    }, 30);
  }

  openStripe() {
    let products: any = [];
    AppConstants.STRIPE_KEY = this.dataShare.siteData.apps.publish_key;
    this.stripeService.changeKey(AppConstants.STRIPE_KEY);
    console.log('this is publish key', this.dataShare.siteData.apps)
    console.log('this is publish key', AppConstants.STRIPE_KEY)
    console.log('these are products', this.dataShare.addProduct)
    if (this.dataShare.siteData.custom.global.currency === '₹'){
      this.currency = 'INR'
    }
    else if(this.dataShare.siteData.custom.global.currency === '$'){
      this.currency = 'USD'
    }
    else if (this.dataShare.siteData.custom.global.currency === '€'){
      this.currency = 'EUR'
    }
    this.dataShare.addProduct.forEach((el: any) => {

      let product: any = {
        price_data: {
          currency: this.currency,
          product_data: {
            name: el.name,
          },
          unit_amount: el.price * 100,
        },
        quantity: 1,
      }
      products.push(product);
    })

    let body = {
      success_url: 'http://' + this.dataShare.siteData.domain + '/order-status/success-stripe?STATUS=PAID&ORDER_NUMBER=' + this.paymentData.ORDER_NUMBER,
      cancel_url: 'http://' + this.dataShare.siteData.domain + '/order-status/fail-stripe?STATUS=FAIL&ORDER_NUMBER=' + this.paymentData.ORDER_NUMBER,
      products: products
    }
    console.log('this is the body', body);
    this.http.post('/create-checkout-session', body)
      .pipe(
        switchMap((session: any) => {
          return this.stripeService.redirectToCheckout({sessionId: session.id})
        })
      )
      .subscribe(result => {
        console.log('these is the result of stripe', result);
        // If `redirectToCheckout` fails due to a browser or network
        // error, you should display the localized error message to your
        // customer using `error.message`.
        if (result.error) {
          console.log('An error occurred in stripe');
          alert(result.error.message);
        }
      });
  }

}

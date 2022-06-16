import {Component, OnInit} from '@angular/core';
import {DataShareService} from "../../services/data-share.service";
import {HttpClient} from "@angular/common/http";
import {AppConstants} from "../../AppConstants";
import {StripeService} from "ngx-stripe";
import {switchMap} from "rxjs/operators";
import {UtilService} from "../../services/util.service";

declare let Stripe: any;

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  private stripe: any;
  public placeOrder = false

  constructor(private http: HttpClient, public dataShare: DataShareService, private stripeService: StripeService, public utilService: UtilService
  ) {
  }

  ngOnInit(): void {
    console.log('site data', this.dataShare.siteData)
    console.log('sitess', this.dataShare.dataValue);
    // this.stripe = Stripe(AppConstants.STRIPE_KEY);

    // console.log('data id', this.dataShare.selectService.id)
    // console.log('data id', this.dataShare.selectServiceId)
  }


  continueServiceStep() {

    for (let el of this.dataShare.siteData.config.step1) {
      console.log('these are elements', el)
      if (el.dynamicData) {
        if (el.dynamicData.required && !(el.dynamicData.value)) {
          // error
          this.placeOrder = false
          this.utilService.presentSnackBar('Please fill all required fields in step1')
          return
        } else {
          this.placeOrder = true
          if (el.type === 'text-box') {
            this.placeOrder = true
            this.dataShare.orderData.push({title: el.dynamicData.title, value: el.dynamicData.value})
          } else if (el.type === 'radio_button') {
            this.dataShare.orderData.push({title: el.dynamicData.title, value: el.dynamicData.selectedValue})
          } else if (el.type === 'check-box') {
            this.dataShare.orderData.push({title: el.dynamicData.title, value: el.dynamicData.value})
          }
        }
      }
    }


    const valid = this.dataShare.addProduct.length > 0
    if (valid) {
      this.dataShare.index = 0;
      this.dataShare.step.service = true;
      console.log('this is dataShare', this.dataShare.index);
      console.log('this is dataShare step service',  this.dataShare.step.service);
      setTimeout(() => {
        this.dataShare.index = 1;
      }, 30);

    }
  }




}

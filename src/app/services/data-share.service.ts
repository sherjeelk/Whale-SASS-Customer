import { Injectable } from '@angular/core';
import * as moment from 'moment';
import * as _ from "lodash";

@Injectable({
  providedIn: 'root'
})
export class DataShareService {
  contactForm : any = {
    phone: '',
    email: '',
    date: '',
    time: ''
  }
  stepIndex = 0;

  step = {service: false, calendar: false, order: false};
  index = 0;

  step1:any = [];
  step3:any = [];
  selectService:any = []; //service id from service
  addProduct:any = [];
  totalPrice : any = 0;
  dataValue:any = {};
  globalData:any;
  productData: any =[];
  servicesData: any = [];
 allProductGet:any = [];
  checked:any
  // selectServiceId:any //service id from product

  //
  // ================dark theme var=================

  darkTheme = true;
  // used header

  brand = 'Brand'
  theme = false;
  themeType: number = 1;
  active: boolean= true;
  value: boolean = false;
  tabIndex: number = 0
  price: any;
  slotsSelected: any;
  siteData: any;
  prod: boolean = false;
  siteApp: any[] = [];
  contactMe: boolean = false;
  constructor() { }
  orderData: any = [];

  calculateTotal() {
    // this.totalPrice = this.getSingleProduct.price + this.getSingleProduct
    // this.totalPrice = this.getSingleProduct.reduce((a: { price: number; }, b: { price: number; }) => ({x: a.price + b.price}))
    // console.log('this is total', this.totalPrice.x)
    // this.price = this.totalPrice.x
    // for (const item of this.getSingleProduct) {
    //   console.log('price', item.price)
    //   this.totalPrice = this.totalPrice + item.price;
    // }


//     // Array of numbers
//     this array = [1,2,3,4,5];
//     var sum = array.reduce((acc, cur) => acc + cur, 0);
//     console.log(sum)
//
// Array of strings
    this.totalPrice = this.addProduct.reduce((a: {price:any}, b:{price:any}) => a + b.price, 0)
    console.log('',this.totalPrice);
  }
  getTime(date: any) {
    return moment.utc(date).format('HH:mm')
  }

  removeProduct(product: any) {
    console.log('this is service to be removed', this.addProduct);
    _.remove(this.addProduct, {id: product.id});
    for(const el of this.allProductGet) {
      console.log('id allProduct',el)
      if (el.id === product.id) {
        console.log('product id', el.id)
        el.checked = false;
      }
    }
    this.calculateTotal();
    console.log('product removed from selected services array');
  }

}

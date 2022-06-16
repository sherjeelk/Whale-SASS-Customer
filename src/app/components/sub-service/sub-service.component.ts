import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {UiService} from "../../services/ui.service";
import {ApiService} from "../../services/api.service";
import {DataShareService} from "../../services/data-share.service";
import * as _ from 'lodash';
import {MatCheckboxChange} from "@angular/material/checkbox";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Product} from "../../models/Product";

@Component({
  selector: 'app-sub-service',
  templateUrl: './sub-service.component.html',
  styleUrls: ['./sub-service.component.scss']
})
export class SubServiceComponent implements OnInit {
  @Input() data: any;
  public checkBoxValue: boolean = false;
  @ViewChild('checkbox', {static: true}) checkBox: ElementRef | undefined;
  getServices: any = []
  getProductData: any = []
  id: any;
  border: boolean = false;
  productId: any;
  price = 0;
  selectedProduct: any = [] ;
  public subServiceType: any =  {};


  constructor(public ui: UiService, private api: ApiService, public dataShare: DataShareService, public snack: MatSnackBar) {
  }

  ngOnInit(): void {
    this.subService();
    this.servicesGet();
    this.fetchProduct();
  }

  servicesGet() {
    this.api.serviceDataGet().subscribe(ele => {
      this.getServices = ele;
        console.log( 'service get',this.getServices)
    },
      error => {
        console.log('error occurred', error)
      })
  }

  fetchProduct() {
    this.api.getSiteProductData().subscribe(data => {
      console.log('data ****************', data);

        this.getProductData = data;

      // this.dataShare.productData = data;
    },
      error => {
        console.log('error occurred ', error)
      })
  }

  selectProduct(product: any) {
    console.log('this is products data', this.dataShare.addProduct)
    if (this.dataShare.addProduct.length > 0) {
      const found = _.find(this.dataShare.addProduct, {id: product.id})
      console.log('found!!!!', found);
      if (!found) {
        this.dataShare.addProduct.push(product)
      } else {
        _.remove(this.dataShare.addProduct, {id: product.id})
      }
    } else {
      this.dataShare.addProduct.push(product)
    }
    this.dataShare.calculateTotal();
  }


  selectProductClass(product:any) {
    return _.find(this.dataShare.addProduct, product) ? 'selectProduct_Class' : 'unselectProduct';

  }

  addProduct(event: any, item: any) {
    // console.log('second component get data',this.selectedProduct);
    // console.log('event value', event.currentTarget.checked)
    item.checked = event.currentTarget.checked
    console.log('item checked value', item.checked);
    if (event.currentTarget.checked) {
      this.selectedProduct = item;
      this.selectedProduct.checked = event.currentTarget.checked;
      this.dataShare.checked = event.currentTarget.checked;

      this.dataShare.addProduct.push(this.selectedProduct);
      console.log('add product', this.dataShare.addProduct)
      for(const el of this.dataShare.allProductGet) {
        if (el.id === item.id) {
          event.currentTarget.checked = true;
          this.checkBoxValue = event.currentTarget.checked;
        }
      }
      console.log('all products selected', this.dataShare.addProduct);
      this.dataShare.calculateTotal();
      console.log('total price', this.dataShare.totalPrice);
      console.log('checked')

    } else {
      console.log('unchecked')
      _.remove(this.dataShare.addProduct, {id: item.id});
      this.dataShare.calculateTotal();
    }
  }

  changeCheckBoxValue(event: any) {
    // console.log('event value', event.currentTarget.checked)
    this.checkBoxValue = event.currentTarget.checked;
  }

  subService(){
    this.dataShare.siteData.config.step1.forEach((el:any)=> {
      if (el.type === 'sub-service'){
        console.log('type is',el)
        this.subServiceType = el
        console.log('data', this.subServiceType)
      }
    })
  }
}


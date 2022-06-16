import {AfterViewInit, Component, Inject, OnInit, Renderer2} from '@angular/core';
import {DataShareService} from "../services/data-share.service";
import {ApiService} from "../services/api.service";
import {UiService} from "../services/ui.service";
import {StepperSelectionEvent} from "@angular/cdk/stepper";
import {DOCUMENT} from "@angular/common";
import {ProductDeleteComponent} from "../product-delete/product-delete.component";
import {MatDialog} from "@angular/material/dialog";
import * as _ from "lodash";
import {UtilService} from "../services/util.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,AfterViewInit {
  isLinear: boolean = true;
  userId  = '619253bed3392468bea56075';
  // userId:number = +this.id
  index: any;



  constructor(public dataShare: DataShareService, private api:ApiService,public ui: UiService, public dialog: MatDialog, @Inject(DOCUMENT) private document: HTMLDocument, private renderer: Renderer2, public utilService:UtilService) {
  }

  ngOnInit(): void {
    this.getSite();
  }
  ngAfterViewInit() {
    const items = this.document.querySelectorAll('.mat-step-icon')
    const items2 = this.document.querySelectorAll('.mat-step-icon-content')
    this.renderer.setStyle(items.item(0), 'background', this.dataShare.siteData.custom?.global.color);
    this.renderer.setStyle(items2.item(0), 'background', this.dataShare.siteData.custom?.global.color);
    // throw new Error('Method not implemented.');
  }

  getSite(){
  this.api.dataSite(this.userId).subscribe(data =>{
  console.log('all data', data);
  if(data.config){
    this.dataShare.globalData = data.custom.global
    console.log('global data ************', this.dataShare.globalData)
    this.dataShare.step1 = data.config.step1
    this.dataShare.step3 = data.config.step3
    console.log('all data save', this.dataShare.step1);
    console.log('all data save', this.dataShare.step3);
  }else {
    console.log('no data available in config')
  }


})
  }
  productDelete(index:number,product:any) {
    // this.dataShare.addProduct.splice(index, 1);
    this.dataShare.totalPrice = this.dataShare.totalPrice - product.price
    // console.log('price', this.dataShare.getSingleProduct)

    if (this.dataShare.addProduct.length > 1) {
      this.dataShare.removeProduct(product);
      for(const el of this.dataShare.allProductGet) {
        if (el.id === product.id) {
          el.checked = false;
        }
      }
      // _.find(this.dataShare.allProducts, {id : product.id});
      console.log('service removed',  _.find(this.dataShare.allProductGet, {id : product.id}));
    } else {
      const dialogRef = this.dialog.open(ProductDeleteComponent, {
        width: '250px',
        data: product
      });
      console.log('service not removed');
    }


  }

  // changeStep($event: StepperSelectionEvent) {
  //   // // @ts-ignore
  //   // console.log('this is step', $event);x`
  //   // this.dataShare.stepIndex = $event.selectedIndex;
  //   // setTimeout(() => {
  //   //   const items = this.document.querySelectorAll('.mat-step-icon')
  //   //   const items2 = this.document.querySelectorAll('.mat-step-icon-selected')
  //   //   const items3 = this.document.querySelectorAll('.mat-step-icon-state-number')
  //   //   this.renderer.setStyle(items.item(0), 'background', this.dataShare.globalData.color);
  //   //   this.renderer.setStyle(items2.item(0), 'background', this.dataShare.globalData.color);
  //   //   this.renderer.setStyle(items3.item(0), 'background', this.dataShare.globalData.color);
  //   // })
  // }
  changeStep($event: StepperSelectionEvent) {
    this.dataShare.stepIndex = $event.selectedIndex
    setTimeout(() => {
      const items = this.document.querySelectorAll('.mat-step-icon')
      const items2 = this.document.querySelectorAll('.mat-step-icon-selected')
      const items3 = this.document.querySelectorAll('.mat-step-icon-state-number')
      this.renderer.setStyle(items.item(0), 'background', this.dataShare.siteData.custom?.global?.color);
      this.renderer.setStyle(items2.item(0), 'background', this.dataShare.siteData.custom?.global?.color);
      this.renderer.setStyle(items3.item(0), 'background', this.dataShare.siteData.custom?.global?.color);

    })
  }
}

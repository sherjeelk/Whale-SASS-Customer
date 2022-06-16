// import { Component, OnInit } from '@angular/core';
import {AfterViewInit, Component, Inject, OnInit, Renderer2, ViewChild, ViewEncapsulation} from '@angular/core';
import {DataShareService} from "../services/data-share.service";
import * as _ from "lodash";
import {ProductDeleteComponent} from "../product-delete/product-delete.component";
import {MatDialog} from "@angular/material/dialog";
import {ApiService} from "../services/api.service";
import {StepperSelectionEvent} from "@angular/cdk/stepper";
import {DOCUMENT} from "@angular/common";
import {UtilService} from "../services/util.service";

@Component({
  selector: 'app-theme-dark',
  templateUrl: './theme-dark.component.html',
  styleUrls: ['./theme-dark.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ThemeDarkComponent implements OnInit, AfterViewInit {
  isLiner: any;
  userId = '619253bed3392468bea56075';

  constructor(public dataShare: DataShareService, public dialog: MatDialog, public api: ApiService, @Inject(DOCUMENT) private document: HTMLDocument, private renderer: Renderer2, public utilService:UtilService) {
  }

  ngOnInit(): void {
    this.getSite()
    console.log('this is mat step ********', this.document.querySelectorAll('.mats-tep-icon'))


  }

  ngAfterViewInit() {
    const items = this.document.querySelectorAll('.mat-step-icon')
    const items2 = this.document.querySelectorAll('.mat-step-icon-content')
    this.renderer.setStyle(items.item(0), 'background', this.dataShare.siteData.custom.global.color);
    this.renderer.setStyle(items2.item(0), 'background', this.dataShare.siteData.custom.global.color);
    // throw new Error('Method not implemented.');
  }

  getSite() {
    this.api.dataSite(this.userId).subscribe(data => {
      console.log('all data', data);
      if (data.config) {
        this.dataShare.step1 = data.config.step1
        this.dataShare.step3 = data.config.step3
        console.log('all data save', this.dataShare.step1);
        console.log('all data save', this.dataShare.step3);
      } else {
        console.log('no data available in config')
      }
    })
  }

  productDelete(index: number, product: any) {
    // this.dataShare.addProduct.splice(index, 1);
    this.dataShare.totalPrice = this.dataShare.totalPrice - product.price
    // console.log('price', this.dataShare.getSingleProduct)

    if (this.dataShare.addProduct.length > 1) {
      this.dataShare.removeProduct(product);
      for (const el of this.dataShare.allProductGet) {
        if (el.id === product.id) {
          el.checked = false;
        }
      }
      // _.find(this.dataShare.allProducts, {id : product.id});
      console.log('service removed', _.find(this.dataShare.allProductGet, {id: product.id}));
    } else {
      const dialogRef = this.dialog.open(ProductDeleteComponent, {
        width: '250px',
        data: product
      });
      console.log('service not removed');
    }


  }

  openDialog() {

    const body = {
      to: 'mayank.kandari@litcode.io',
      subject: 'This is test mail',
      text: 'this is text',
      html: '<div>Hello</div>'
    }
    this.api.sendMail(body).subscribe(data => {
      console.log('data', data)
    }, error => {
      console.log('Error occurred', error)
    })
    // const dialogRef = this.dialog.open(PlaceOrderComponent, {
    //   width: '600px',
    //   data: {select: true}
    // });
    //
    // dialogRef.afterClosed().subscribe((result: any) => {
    //   console.log(`Dialog result:`, result);
    // });
  }

  changeStep($event: StepperSelectionEvent) {
    this.dataShare.stepIndex = $event.selectedIndex;
    setTimeout(() => {
      const items = this.document.querySelectorAll('.mat-step-icon')
      const items2 = this.document.querySelectorAll('.mat-step-icon-selected')
      const items3 = this.document.querySelectorAll('.mat-step-icon-state-number')
      this.renderer.setStyle(items.item(0), 'background', this.dataShare.siteData.custom.global.color);
      this.renderer.setStyle(items2.item(0), 'background', this.dataShare.siteData.custom.global.color);
      this.renderer.setStyle(items3.item(0), 'background', this.dataShare.siteData.custom.global.color);

    })
  }
}

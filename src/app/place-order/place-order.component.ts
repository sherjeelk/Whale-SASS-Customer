import { Component, OnInit } from '@angular/core';
import {DataShareService} from "../services/data-share.service";
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../services/api.service";

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss']
})
export class PlaceOrderComponent implements OnInit {

  constructor( public dataShare : DataShareService, private route: ActivatedRoute, private api: ApiService) { }
  status : any;
  paymentObject: any;
  // paymentMethod: any;
  // userData: any;




  ngOnInit(): void {
    this.status = this.route.snapshot.paramMap.get('status');
    const data = this.route.queryParams.subscribe(params => {
      const orderStatus = params['STATUS'];
      const orderNumber = params['ORDER_NUMBER'];
      this.paymentObject = {orderStatus, orderNumber};
       this.confirmOrder();
    });

    }

  confirmOrder(){
    const body = {order: this.paymentObject.orderNumber, status: this.paymentObject.orderStatus === 'success' ? 'PAID' : this.paymentObject.orderStatus, name : ''};
    this.api.confirmOrder(body).subscribe(resp=> {
        console.log('this is response', resp)
    },
      error => {
        console.log('An error occured', error)
      }
      )
  }

}

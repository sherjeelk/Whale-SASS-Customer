import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Router} from "@angular/router";
import {UiService} from "../../services/ui.service";
import {DataShareService} from "../../services/data-share.service";
import {MatCheckboxChange} from "@angular/material/checkbox";
import * as _ from "lodash";

@Component({
  selector: 'app-sub-service-stack',
  templateUrl: './sub-service-stack.component.html',
  styleUrls: ['./sub-service-stack.component.scss']
})
export class SubServiceStackComponent implements OnInit {
  @Input() data: any;
  productData: any =[]
  selectedProduct: any = [] ;

  constructor( private api: ApiService, public router: Router, public ui: UiService,  public dataShare: DataShareService) { }

  ngOnInit(): void {
    // this.productStack()
  }
  // productStack(){
  //   this.api.getSiteProductData().subscribe(data => {
  //     console.log('data of product', data);
  //     this.productData= data;
  //     this.dataShare.dataValue = data
  //     console.log('')
  //   })
  // }

  /**
   * goes to setting Add Product
   */
  // product(){
  //   this.router.navigateByUrl('settings')
  // }


  // addProduct($event: MatCheckboxChange, item: any) {
  //   console.log($event);
  //   this.selectedProduct = item;
  //   console.log('second component gate data',this.selectedProduct);
  //   if ($event.checked) {
  //     this.dataShare.addProduct.push(this.selectedProduct);
  //     for(const el of this.dataShare.allProductGet) {
  //       if (el.id === item.id) {
  //         el.checked = true;
  //       }
  //     }
  //     console.log('all products selected', this.dataShare.addProduct);
  //     this.dataShare.calculateTotal();
  //     console.log('total price', this.dataShare.totalPrice);
  //     console.log('checked')
  //
  //   } else {
  //     console.log('unchecked')
  //     _.remove(this.dataShare.addProduct, {id: item.id});
  //     this.dataShare.calculateTotal();
  //   }
  // }
}


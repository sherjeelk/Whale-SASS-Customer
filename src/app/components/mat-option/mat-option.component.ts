import {Component, Input, OnInit} from '@angular/core';
import {UiService} from "../../services/ui.service";
import {ApiService} from "../../services/api.service";
import {Router} from "@angular/router";
import {DataShareService} from "../../services/data-share.service";
import {MatSnackBar} from "@angular/material/snack-bar";


@Component({
  selector: 'app-mat-option',
  templateUrl: './mat-option.component.html',
  styleUrls: ['./mat-option.component.scss']
})
export class MatOptionComponent implements OnInit {
  getServices: any = []
  @Input() data: any;
  private service: any;
  public selectServicesId: any;

  constructor( public ui: UiService, private  api: ApiService, public router: Router,public dataShare: DataShareService, public snack : MatSnackBar) {
  }

  ngOnInit(): void {
    console.log('this is data **********************************************', this.data);
    // console.log('this is step 1', this.drag.step1);
    this.getServiceData();

  }
  getServiceData(){
    this.api.serviceDataGet().subscribe(data=>{
      console.log('data of services', data);
      this.getServices = data;
    }, error => {
      console.log('error occurred', error)
    })
  }

  /**
   * Setting function to go the settings
   */
  settings(){
    this.router.navigateByUrl('settings');
  }

  /**
   * function for getting all service
   * @param $event is passed from selection change
   */
    getServiceValue($event:any) {
     this.dataShare.selectService = $event.value;
    this.selectServicesId = $event.value;
      this.api.getSiteId( this.selectServicesId.id).subscribe(data=> {
        console.log('while selection change the data is', data)
        if (data){
          this.dataShare.allProductGet = data;
          this.compareArrays(data)
        }
        else {
          this.snack.open('No Product Found!', '', {duration: 1000})
        }

      });
  }
  compareArrays(array: any,  ){
    for(let i=0; i<array.length; i++){
      console.log('this is compared array', array[i].id)
      console.log('this is compared arr2', this.dataShare.addProduct[i]?.id)
      if (array[i]?.id === this.dataShare.addProduct[i]?.id){
        array[i].checked = true;
        console.log('this is compared array', array[i], this.dataShare.addProduct [i])
      }
    }
  }
}

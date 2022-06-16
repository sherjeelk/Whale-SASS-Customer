import {AfterViewInit, Component, Inject, Input, OnInit} from '@angular/core';
import {UiService} from "../../services/ui.service";
import {DOCUMENT} from "@angular/common";
import {DataShareService} from "../../services/data-share.service";
import {fakeAsync} from "@angular/core/testing";

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent implements OnInit, AfterViewInit {

  @Input() data: any;
  public radioBtnValue: boolean = false;
  loopNumber: any;

  constructor( public ui: UiService, @Inject(DOCUMENT) private document: HTMLDocument, public dataShare: DataShareService) {
  }

  ngOnInit(): void {
    console.log('data of radio button', this.data)
    this.data.dynamicData.radioBtn.forEach((el:any)=>{
      el.active = false
    })
  }

  ngAfterViewInit(): void {

  }


  changeRadioBtn(event: any, item: any) {
    console.log('item', item)
    this.data.dynamicData.selectedValue = item.text;
    this.data.dynamicData.value = true;
    console.log('site', this.dataShare.siteData);
    console.log('dynamic data', this.data.dynamicData);
    // console.log('event value', event.currentTarget.checked)
    this.data.dynamicData.radioBtn.forEach((el:any)=> {
      if (el.id === item.id){
        el.active = event.currentTarget.checked
      }
      else {
        el.active = !event.currentTarget.checked
      }
    })
    this.radioBtnValue = event.currentTarget.checked;
    console.log('after adding button value this is data ', this.data)
  }

}

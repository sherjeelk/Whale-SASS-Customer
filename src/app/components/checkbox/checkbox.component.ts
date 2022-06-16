import {AfterViewInit, Component, Inject, Input, OnInit} from '@angular/core';
import {MatCheckboxChange} from "@angular/material/checkbox";
import {DOCUMENT} from "@angular/common";
import {DataShareService} from "../../services/data-share.service";
import {MatDialog} from "@angular/material/dialog";
import {AboutComponent} from "../../about/about.component";
import {PrivacyPolicyComponent} from "../../privacy-policy/privacy-policy.component";
import {TermComponent} from "../../term/term.component";

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit, AfterViewInit {
  @Input() data: any;
  public checkBoxValue: boolean = false;
  constructor(@Inject(DOCUMENT) private document: HTMLDocument, public dataShare : DataShareService, private dialog: MatDialog) {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    // const items = this.document.querySelectorAll('.mat-ripple-element')
    // const items2 = this.document.querySelectorAll('.mat-checkbox-persistent-ripple')
    // const items3 = this.document.querySelectorAll('.mat-checkbox-checked')
    // //here
    // const items4 = this.document.querySelectorAll('.mat-checkbox-background')
    // const items5 = this.document.querySelectorAll('.mat-accent')
    // this.renderer.setStyle(items.item(0), 'background', this.ui.themeColor);
    // this.renderer.setStyle(items2.item(0), 'background', this.ui.themeColor);
    // this.renderer.setStyle(items3.item(0), 'background', this.ui.themeColor);

    // new comment========================

    // this.renderer.setStyle(items4.item(0), 'background', this.ui.themeColor);

    // end comment====================
    // this.renderer.setStyle(items5.item(0), 'background', this.ui.themeColor);
    // console.log('these are items', items);

  }

  // changeColor($event: MatCheckboxChange) {
  //   // if (!$event.checked) {
  //   //   const items4 = this.document.querySelectorAll('.mat-checkbox-background')
  //   //   const items = this.document.querySelectorAll('.mat-checkbox-frame')
  //   //   this.renderer.setStyle(items4.item(0), 'background', '#fff');
  //   //   this.renderer.setStyle(items.item(0), 'border', '1px solid');
  //   // } else {
  //   //   const items4 = this.document.querySelectorAll('.mat-checkbox-background')
  //   //   // this.renderer.setStyle(items4.item(0), 'background', this.ui.themeColor);
  //   //
  //   // }
  //
  // }

  changeCheckBoxValue(event: any) {
    // console.log('event value', event.currentTarget.checked)
    this.checkBoxValue = event.currentTarget.checked;
    this.data.dynamicData.value = event.currentTarget.checked
    console.log('this is data', this.data)
  }

  openLinkPopUp() {
    if (this.data.dynamicData.links?.checked) {
      if (this.data.dynamicData.links.title === 'About') {

        this.dialog.open(AboutComponent, {
          width: '600px',
          height: '400px'
        })
      } else if (this.data.dynamicData.links.title === 'Privacy') {
        this.dialog.open(PrivacyPolicyComponent, {
          width: '600px',
          height: '400px'
        })
      } else {
        this.dialog.open(TermComponent, {
          width: '600px',
          height: '400px'
        })
      }

    }
  }
}


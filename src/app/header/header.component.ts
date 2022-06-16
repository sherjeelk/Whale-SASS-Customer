import { Component, OnInit } from '@angular/core';
import {UiService} from "../services/ui.service";
import {DataShareService} from "../services/data-share.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( public ui: UiService,public dataShare: DataShareService) { }

  headerData: string = '';

  ngOnInit(): void {

    // console.log('Inside header', this.dataShare.siteData?.name)
    // this.headerData = this.dataShare.siteData.name;
    // console.log('this is header data', this.headerData)

  }

}

import { Component, OnInit } from '@angular/core';
import {ApiService} from "../services/api.service";
import {UiService} from "../services/ui.service";
import {DataShareService} from "../services/data-share.service";

class DataService {
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent  implements OnInit {
  public customDetails: any = { };
  constructor(public api: ApiService,public dataShare: DataShareService, public ui: UiService ) { }

  ngOnInit(): void {
    console.log('this is siteData', this.dataShare.siteData)
  }
  // profileDetails(){
  //   // this.loading = true;
  //   // this.api.dataSite().subscribe( data=> {
  //   //   console.log('this is data', data.custom.global)
  //   //   // this.dataShare.globalData = data.custom.global
  //   //     console.log('sites api data...', data)
  //   //
  //   //     // this.sites = data.custom;
  //   //     // this.patchData(data.custom);
  //   //     // this.loading= false;
  //   //     // console.log( 'sitesssssss now', this.sites)
  //   //
  //   // })
  // }

}


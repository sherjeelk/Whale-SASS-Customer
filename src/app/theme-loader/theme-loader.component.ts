import { Component, OnInit } from '@angular/core';
import {DataShareService} from "../services/data-share.service";
import {AppConstants} from "../AppConstants";

@Component({
  selector: 'app-theme-loader',
  templateUrl: './theme-loader.component.html',
  styleUrls: ['./theme-loader.component.scss']
})
export class ThemeLoaderComponent implements OnInit {
  prod = false;
  constructor( public  dataShare: DataShareService) {
    this.prod = AppConstants.prod;
    console.log('this is prod', this.prod)
    console.log('this is prod', AppConstants.prod)
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {DataShareService} from "../services/data-share.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(public dataShare:DataShareService) { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {DataShareService} from "../services/data-share.service";

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {

  constructor(public dataShare:DataShareService) { }

  ngOnInit(): void {
  }

}

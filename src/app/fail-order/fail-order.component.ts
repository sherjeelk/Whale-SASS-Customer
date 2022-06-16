import { Component, OnInit } from '@angular/core';
import {DataShareService} from "../services/data-share.service";

@Component({
  selector: 'app-fail-order',
  templateUrl: './fail-order.component.html',
  styleUrls: ['./fail-order.component.scss']
})
export class FailOrderComponent implements OnInit {

  constructor( public dataShare: DataShareService) { }

  ngOnInit(): void {
  }

}

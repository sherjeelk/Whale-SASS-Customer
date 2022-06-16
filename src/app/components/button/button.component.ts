import {Component, Input, OnInit} from '@angular/core';
import {DataShareService} from "../../services/data-share.service";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
@Input() data: any;
  constructor(public dataValue: DataShareService) { }

  ngOnInit(): void {
    console.log('this is data *******************************', this.data)
  }

}

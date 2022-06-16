import {Component, Input, OnInit} from '@angular/core';
import {DataShareService} from "../../services/data-share.service";

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss']
})
export class TextBoxComponent implements OnInit {
  @Input() data: any;
  constructor( public dataShare : DataShareService) { }

  ngOnInit(): void {
    console.log('this is data of text box ', this.data)
  }

}

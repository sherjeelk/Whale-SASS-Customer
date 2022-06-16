import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-edit-textbox',
  templateUrl: './edit-textbox.component.html',
  styleUrls: ['./edit-textbox.component.scss']
})
export class EditTextboxComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

}

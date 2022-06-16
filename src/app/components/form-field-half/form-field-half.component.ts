import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-form-field-half',
  templateUrl: './form-field-half.component.html',
  styleUrls: ['./form-field-half.component.scss']
})
export class FormFieldHalfComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

}


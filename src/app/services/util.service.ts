import { Injectable } from '@angular/core';
import * as moment from 'moment';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private snack: MatSnackBar) { }

  public getIndianDate(date: any): string{
    return moment(date).format('DD-MM-YYYY')
  }


  presentSnackBar(msg:string) {
    this.snack.open(msg, '' ,{
      duration: 500
    });

  }
}

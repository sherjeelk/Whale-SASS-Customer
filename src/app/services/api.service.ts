import { Slots } from './../models/Slots';
import { Apps } from './../models/Apps';
import { Product } from './../models/Product';

import { Site } from './../models/Site';
import { Services } from './../models/Services';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { AppConstants } from "../AppConstants";
import { DataShareService } from "./data-share.service";

// import {SessionService} from "./session.service";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private headers: any;

  constructor(private http: HttpClient, private data: DataShareService) {

  }

                        // getProductData(): Observable<Product[]> {
                        //   return this.http.get<Product[]>(AppConstants.API.PRODUCT)
                        // }
  dataSite(userId?: string): Observable<Site> {
    return this.http.get<Site>(AppConstants.API.CREATE_SITE + '/' + (AppConstants.prod ? AppConstants.SITE_ID_PROD : AppConstants.SITE_ID_TEST))
  }

  getApp(): Observable<Apps> {
    return this.http.get<Apps>(AppConstants.API.CREATE_APP)
  }

  serviceDataGet(): Observable<Services> {
    return this.http.get<Services>(AppConstants.API.SITE_SERVICES + '?site=' + (AppConstants.prod ? AppConstants.SITE_ID_PROD : AppConstants.SITE_ID_TEST))
  }

  getSiteProductData(): Observable<Product> {
    return this.http.get<Product>(AppConstants.API.SITE_PRODUCT + '?site=' + (AppConstants.prod ? AppConstants.SITE_ID_PROD : AppConstants.SITE_ID_TEST))
  }

  getSiteId(serviceId: string): Observable<Product> {
    return this.http.get<Product>(AppConstants.API.SITE_PRODUCT + '?site=' + (AppConstants.prod ? AppConstants.SITE_ID_PROD : AppConstants.SITE_ID_TEST) + '&services=' + serviceId)
  }

  public getSlots(): Observable<Slots[]> {
    console.log('Got Slots', this.data.siteData)
    return this.http.get<Slots[]>(AppConstants.API.SLOTS + this.data.siteData.apps.calendar);
  }
  getSiteData() {
    return this.http.post('/site', {});
  }
  sendMail(body: any) {
    return this.http.post<any>(AppConstants.API.SEND_MAIL, body, { headers: this.headers })
  }
  submitOrder(body: any){
    return this.http.post<any>(AppConstants.API.ORDER, body, {headers: this.headers})
  }
  confirmOrder(body: any){
    return this.http.post<any>(AppConstants.API.CONFIRM_ORDER, body, {headers: this.headers})
  }
}

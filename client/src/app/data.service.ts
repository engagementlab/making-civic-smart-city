import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Subject } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

import { environment } from '../environments/environment';

import * as _ from 'underscore';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public isLoading: Subject<boolean> = new Subject<boolean>();
  private baseUrl: string;

  constructor(private http: HttpClient) { 

  	this.baseUrl = (environment.production ? 'https://'+window.location.host : 'http://localhost:3000') + '/api/';

  }
	
  public getDataForUrl(url: string): Observable<any> {

      this.isLoading.next(true);
      
      return this.http.get(this.baseUrl+'get/'+url)
      .map((res:any)=> {
        return res.data;
      })
      .catch((error:any) => { 
          this.isLoading.next(false);
          return Observable.throw(error);
      });

}
}

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

@Injectable()
export class DataService {

  public isLoading: Subject<boolean> = new Subject<boolean>();
  public whitepaperSubject: Subject<boolean> = new Subject<boolean>();
  public whitepaperUrl: string;
  private baseUrl: string;

  constructor(private http: HttpClient) { 

  	this.baseUrl = (environment.production ? 'https://'+window.location.host : 'http://localhost:3000') + '/api/';

  }

  public setWhitepaperUrl(url: string) {
    
    this.whitepaperSubject.next(true);
    this.whitepaperUrl = url;
    this.whitepaperSubject.next(false);

  }
	
  public getDataForUrl(page: string, suburl: string = undefined): Observable<any> {

      this.isLoading.next(true);

      let url = this.baseUrl+'get/data/'+page+'/'; 
      if(suburl)
      	url += suburl;

      return this.http.get(url)
      .map((res:any)=> {
        return res.data;
      })
      .catch((error:any) => { 
          this.isLoading.next(false);
          return Observable.throw(error);
      });

	}
	
  public getFilteredDataForUrl(url: string, selector: string): Observable<any> {

      this.isLoading.next(true);

      return this.http.get(this.baseUrl+'get/data/select/'+url+'/'+selector)
      .map((res:any)=> {
        return res.data;
      })
      .catch((error:any) => { 
          this.isLoading.next(false);
          return Observable.throw(error);
      });

	}
}

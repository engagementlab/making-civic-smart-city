import {
  Injectable
} from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse
} from '@angular/common/http';

import {
  Subject
} from 'rxjs';
import {
  Observable
} from 'rxjs/Observable';
import {
  catchError
} from 'rxjs/operators';

import {
  environment
} from '../environments/environment';

import * as _ from 'underscore';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';

import {
  isScullyGenerated,
  TransferStateService
} from '@scullyio/ng-lib'

@Injectable()
export class DataService {

  public isLoading: Subject < boolean > = new Subject < boolean > ();
  public whitepaperSubject: Subject < boolean > = new Subject < boolean > ();
  public whitepaperUrl: string;
  private baseUrl: string;

  constructor(private http: HttpClient,
    private transferState: TransferStateService) {

    // Use production for static archival build
    this.baseUrl = 'https://civicsmart.city/api/get/data';
    // this.baseUrl = (environment.production ? 'https://'+window.location.host : 'http://localhost:3000') + '/api/';

  }

  public setWhitepaperUrl(url: string) {

    this.whitepaperSubject.next(true);
    this.whitepaperUrl = url;
    this.whitepaperSubject.next(false);

  }


  getData(url: string): Promise < unknown > {

    this.isLoading.next(true);

    // If scully is building or dev build, cache data from content API in transferstate
    if (!isScullyGenerated()) {
      const content = new Promise < unknown > ((resolve, reject) => {
        this.isLoading.next(true);

        return this.http.get(url).toPromise().then(res => {
            // Catch no data as problem on backend
            if (res === null) return;

            // Cache result in state
            this.transferState.setState(url, res['data']);
            resolve(res['data']);
            return res['data'];
          })
          .catch((error: any) => {
            reject(error);
            this.isLoading.next(false);
            return null;
          });

      });
      return content;

    } else {

      // Get cached state for this key
      const state = new Promise < unknown[] > ((resolve, reject) => {
        try {
          this.transferState
            .getState < unknown[] > (url)
            .subscribe(res => {
              resolve(res)
              return res;
            });
        } catch (error) {
          this.isLoading.next(false);
        }
      });
      return state;
    }

  }

  public getDataForUrl(page: string, suburl: string = undefined): Promise < unknown > {

    let url = `${this.baseUrl}/${page}/`;
    if (suburl)
      url += suburl;

    return this.getData(url);
  }

  public getFilteredDataForUrl(url: string, selector: string): Promise < unknown > {

    const mergedUrl = `${this.baseUrl}/select/${url}/${selector}`;
    return this.getData(mergedUrl);

  }
}
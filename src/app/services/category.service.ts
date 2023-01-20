import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { filter, map } from 'rxjs';

import { firebaseDbUrl } from 'environment';
import { Observable } from 'rxjs';

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
     const url = firebaseDbUrl;
     return this.http.get(url).pipe(map((results: any)=> {
          return results.categories;
     }),map((results: any)=> {
         const newResults = results.filter((category: any)=> {
            return category !== null;
         });
         console.log('newresults', newResults);
         return newResults;
     }));
  }
}

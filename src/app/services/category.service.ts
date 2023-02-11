import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { filter, map } from 'rxjs';

import { firebaseDbUrl } from 'environment';
import { nestBaseUrl } from 'environment';
import { Observable } from 'rxjs';

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
     const url = nestBaseUrl + '/category';
     return this.http.get(url);
  }
}

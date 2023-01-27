import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from '../models/product';

import { firebaseDbUrl } from 'environment';

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProductByCategoryId(categoryId: number): Observable<Product[]>{
      const url = firebaseDbUrl + '/products.json';
      const params = new HttpParams().set('orderBy', '"categoryId"').set('equalTo', categoryId);
      return this.http.get(url, {
        params: params
      }).pipe(map ((results: any)=> {
          const products: Product[] = [];
          if(categoryId in results ){
            products.push(results[categoryId]);
          }
          
          return products;
      }));
  }
}

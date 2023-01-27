import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

import { filter, map } from 'rxjs';

import { Product } from '../models/product';

import { firebaseDbUrl } from 'environment';

@Injectable()
export class ProductDetailsService {

  constructor(private http: HttpClient) { }

  getProductById(productId: number): Observable<Product[]>{
    const url = firebaseDbUrl + '/products.json';
    const params = new HttpParams().set('orderBy', '"id"').set('equalTo', productId);
    return this.http.get(url,{
      params: params
    }).pipe(map ((results: any)=> {
      const products: Product[] = [];
      if(productId in results ){
        products.push(results[productId]);
      }
      
      return products;
    }));

  }
}

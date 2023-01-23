import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { filter, map } from 'rxjs';

import { Product } from '../models/product';

import { firebaseDbUrl } from 'environment';

@Injectable()
export class ProductDetailsService {

  constructor(private http: HttpClient) { }

  getProductById(productId: number): Observable<Product[]>{
    return this.http.get(firebaseDbUrl).pipe(map((results: any)=> {
         return results['products'];
    }),map((results: any)=> {
         return results.filter((product: Product)=> {
             if(product){
               return product.id === productId;
             }else{
               return false;
             }
            
         });;
    }));

  }
}

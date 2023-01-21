import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from '../models/product';

import { firebaseDbUrl } from 'environment';

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProductByCategoryId(categoryId: number): Observable<Product[]>{
      return this.http.get(firebaseDbUrl).pipe(map ((results: any)=> {
          return results.products.filter((product: Product)=> {
               if(product){
                return product.categoryId === categoryId;
               }else{
                return false;
               }
              
          });
      }));
  }
}

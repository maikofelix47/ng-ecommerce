import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from '../models/product';

import { nestBaseUrl } from 'environment';

@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProductByCategoryId(categoryId: number): Observable<Product[]> {
    const url = nestBaseUrl + `/product/category/${categoryId}`;
    return this.http.get(url).pipe(
      map((results: any) => {
        const products: Product[] = Object.values(results);

        return products;
      })
    );
  }
}

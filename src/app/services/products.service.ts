import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from '../models/product';

import { nestBaseUrl } from 'environment';

@Injectable()
export class ProductsService {
  public productUrl = nestBaseUrl + '/product';

  constructor(private http: HttpClient) {}

  getProductByCategoryId(categoryId: number): Observable<Product[]> {
    const url = this.productUrl + `/category/${categoryId}`;
    return this.http.get<Product[]>(url).pipe(
      map((results: any) => {
        const products: Product[] = Object.values(results);

        return products;
      })
    );
  }

  createProduct(product: Partial<Product>): Observable<Product> {
    const url = this.productUrl;
    return this.http.post<Product>(url,product);
  }
}

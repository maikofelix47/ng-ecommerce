import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Observable } from 'rxjs';

import { ProductDetailsService } from '../../services/product-details.service';
import { ShoppingCartService } from '../../services/shopping-cart.service';

import { Product } from '../../models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
    public product$!: Observable<Product[]>;
    constructor(private productDetailsService: ProductDetailsService,
      private route: ActivatedRoute,
      private cartService: ShoppingCartService){

    }
    public ngOnInit(): void {
       this.route.paramMap.subscribe((params: ParamMap)=> {
             if(params){
                 const productId = params.get('id');
                 this.getProductDetails(Number(productId))
             }
       });
    }
    public getProductDetails(productId: number){
        this.product$ = this.productDetailsService.getProductById(productId);
    }

    public addToCart(product: Product): void{
       this.cartService.addItemsToCart(product);
    }
}

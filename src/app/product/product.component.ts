import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { ProductsService } from '../services/products.service';
import { ShoppingCartService } from '../services/shopping-cart.service';

import { Product } from '../models/product';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
 public products: Product[] = [];
 public quantity: number = 1;

  constructor(private productService: ProductsService,
    private route: ActivatedRoute,
    private router: Router,
    private cartService: ShoppingCartService,
    private loaderService:LoaderService){

  }


  public ngOnInit(): void {
     this.route.paramMap.subscribe((params: ParamMap)=> {
        if(params){
            const categoryId = params.get('id');
            this.getProductsByCategoryId(Number(categoryId));
        }
     });
  }

  getProductsByCategoryId(categoryId: number){
     this.showLoader();
     this.productService.getProductByCategoryId(categoryId)
     .subscribe((products: Product[])=> {
        this.products = products;
        this.hideLoader();
     });
  }

  viewProduct(productId: number): void{
       this.router.navigate(['./product/', productId]);
  }

  addToCart(product: Product,quantity: number){

   this.cartService.addItemsToCart(product,quantity);

  }
  public showLoader(){
    this.loaderService.showLoader();
  }
  public hideLoader(){
     this.loaderService.hideLoader();
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { ProductsService } from '../services/products.service';

import { Product } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
 public products: Product[] = [];

  constructor(private productService: ProductsService,
    private route: ActivatedRoute,
    private router: Router,){

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
     this.productService.getProductByCategoryId(categoryId)
     .subscribe((products: Product[])=> {
        this.products = products;
     });
  }

  viewProduct(productId: number): void{
       this.router.navigate(['./product/', productId]);
  }

}

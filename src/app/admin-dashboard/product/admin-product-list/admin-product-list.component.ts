import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent  implements OnInit{

    public displayedColumns: string[] = ['id', 'name' ,'price', 'inStock', 'action'];

     products$!: Observable<Product[]>;
     constructor(private productsService: ProductsService){
     }

     ngOnInit(): void {
       this.products$ = this.productsService.getProducts();
     }
}

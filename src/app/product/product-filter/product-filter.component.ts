import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent {

  public minPrice = 0;
  public maxPrice = 200000;
  public rating = 1;
  public category = '';

  constructor(private router: Router){

  }

  public applyFilter(){
    const filterParams = {
      minPrice: this.minPrice,
      maxPrice: this.maxPrice,
      rating: this.rating,
      category: this.category
    };

   this.router.navigate([], {queryParams: filterParams});
  }

}

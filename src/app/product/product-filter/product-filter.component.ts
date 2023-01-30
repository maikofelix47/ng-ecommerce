import { Component } from '@angular/core';

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

  constructor(){

  }

  public applyFilter(){
    
  }

}

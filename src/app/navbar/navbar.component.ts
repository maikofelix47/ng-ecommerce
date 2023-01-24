import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  public itemsInCart$!: Observable<number>;

  constructor(private cartService: ShoppingCartService){

  }

  public ngOnInit(): void {
    this.getItemsInCart();
  }
  
  public getItemsInCart(){
      this.itemsInCart$= this.cartService.getItemsInCart();
  }


}

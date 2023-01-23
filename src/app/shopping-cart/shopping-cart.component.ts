import { Component, OnInit } from '@angular/core';

import { ShoppingCartService } from '../services/shopping-cart.service';

import { Product } from '../models/product';
import { Cart, CartItem } from '../models/shopping-cart';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit{
  public displayedColumns: string[] = ['productId','productName', 'unitPrice', 'quantity', 'edit'];
  public cart!: Cart;
  public cartItems: CartItem[] = [
    {
      productName: 'Macbook 2021',
      productId: 1,
      unitPrice: 500,
      quantity: 1,
      totalPrice: 500
    },
    {
      productName: 'FIFA 23',
      productId: 2,
      unitPrice: 43,
      quantity: 1,
      totalPrice: 43
    }
  ];

  constructor(private cartService: ShoppingCartService){

  }

  public ngOnInit(): void {
    this.getCart();
  }

  public onRowClick(row: any){
  }
  public editCartItem(element: any){
  }
  public removeCartItem(element: any){
    this.cartItems = this.cartItems.filter((item: CartItem)=> {
         return item.productId !== element.productId;
    });
    this.cartService.setCart(this.cartItems);
  }
  public getCart(){
      this.cartItems = this.cartService.getCart();
  }

}

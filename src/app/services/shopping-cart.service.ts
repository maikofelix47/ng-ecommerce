import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

import { Product } from '../models/product';
import { Cart,CartItem } from '../models/shopping-cart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private itemsInCart = new BehaviorSubject<number>(0);
  public itemsInCartObs$ = this.itemsInCart.asObservable();
  public no = 0;
  public cart!: CartItem[];

  constructor() { }

  getItemsInCart(): Observable<number>{
     return this.itemsInCartObs$;
  }
  addItemsToCart(item: Product){
    const cart: CartItem[] = this.getCart();

     cart.push({
        productName: item.name,
        productId: item.id,
        unitPrice: item.price,
        quantity: 1,
        totalPrice: 0
     });

     this.setCart(cart);
     

  }
  getCart(): CartItem[]{
     const cart = localStorage.getItem('cart') || null;
     if(cart){
         return JSON.parse(cart);
     }else{
       return [];
     }

  }
  setCart(cart: CartItem[]){
    localStorage.setItem('cart', JSON.stringify(cart));
    this.cart = cart;
    this.itemsInCart.next(this.cart.length);
  }
}

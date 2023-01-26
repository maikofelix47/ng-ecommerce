import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ShoppingCartService } from '../services/shopping-cart.service';

import { FirebaseUser } from '../models/firebase-login-response';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  public itemsInCart$!: Observable<number>;
  public loggedInUser: any;

  constructor(private cartService: ShoppingCartService,
    private authService: AuthService){

  }

  public ngOnInit(): void {
    this.getLoggedInUser();
    this.getItemsInCart();
  }
  
  public getItemsInCart(){
      this.itemsInCart$= this.cartService.getItemsInCart();
  }
  private getLoggedInUser(){
      this.loggedInUser = this.authService.getSignedInUser();
  }


}

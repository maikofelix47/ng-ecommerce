import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { SignUpComponent } from './sign-up/sign-up.component';


import { AuthGuardService } from './services/auth-guard.service';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  {
     path: '',
     component: LandingComponent,
     canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login'
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    title: 'Sign Up'
  },
  {
    path: 'category/:id',
    component: ProductComponent,
    title: 'Category'
  },
  {
    path: 'products',
    component: ProductComponent,
  },
  {
    path: 'product/:id',
    component: ProductDetailsComponent,
    title: 'Product Details'
  },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent,
    title: 'Shopping Cart'
  },
  { 
    path: '**', 
    component: PageNotFoundComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuardService]
})
export class AppRoutingModule { }

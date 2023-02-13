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
import { CheckoutComponent } from './checkout/checkout.component';
import { AppreciationComponent } from './appreciation/appreciation.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { CreateCategoryComponent } from './category/create-category/create-category.component';

const routes: Routes = [
  {
     path: '',
     component: MainDashboardComponent,
     children: [
      {
        path: '',
        component: LandingComponent
      },
      {
        path: 'products',
        component: ProductComponent,
      },
      {
        path: 'category/:id',
        component: ProductComponent,
        title: 'Category'
      },
      {
        path: 'create-category',
        component: CreateCategoryComponent,
        title: 'Create Category'
      },
      {
        path: 'product/:id',
        component: ProductDetailsComponent,
        title: 'Product Details'
      },
      {
        path: 'shopping-cart',
        component: ShoppingCartComponent,
        title: 'Shopping Cart',
        canActivate: [AuthGuardService]
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
        title: 'Check Out',
        canActivate: [AuthGuardService]
      },
      {
        path: 'appreciation',
        component: AppreciationComponent,
        title: 'Thank You'
      }
     ]
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

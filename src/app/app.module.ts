import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgMaterialModule } from './ng-material/ng-material.module';

import { LoginComponent } from './login/login.component';

import { ErrorComponent } from './error/error.component';

import { ErrorService } from './services/shared/error.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CategoryService } from './services/category.service';
import { SearchComponent } from './search/search.component';


import { ProductDetailsService } from './services/product-details.service';
import { ProductsService } from './services/products.service';
import { ShoppingCartDialogComponent } from './shopping-cart/shopping-cart-dialog/shopping-cart-dialog.component';


import { TokenInterceptorService } from './services/interceptors/token-interceptor.service';
import { LoaderComponent } from './loader/loader.component';

import { LoaderService } from './services/loader.service';


import { AdminModule } from './admin-dashboard/admin.module';
import { UserDashboardModule } from './user-dashboard/user-dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    SignUpComponent,
    SearchComponent,
    ShoppingCartDialogComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminModule,
    UserDashboardModule,
    NgMaterialModule,
    AppRoutingModule,
  ],
  providers: [
    ErrorService,
    CategoryService,
    ProductDetailsService,
    ProductsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
    LoaderService
  ],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

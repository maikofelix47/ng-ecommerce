import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular material components
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'; 
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge'; 
import { MatDialogModule } from '@angular/material/dialog';

import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { ErrorComponent } from './error/error.component';

import { ErrorService } from './services/shared/error.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CategoryComponent } from './category/category.component';
import { CategoryService } from './services/category.service';
import { SearchComponent } from './search/search.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { ProductDetailsService } from './services/product-details.service';
import { ProductsService } from './services/products.service';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingCartDialogComponent } from './shopping-cart/shopping-cart-dialog/shopping-cart-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    NavbarComponent,
    MainBannerComponent,
    ErrorComponent,
    SignUpComponent,
    CategoryComponent,
    SearchComponent,
    ProductComponent,
    ProductDetailsComponent,
    PageNotFoundComponent,
    ShoppingCartComponent,
    ShoppingCartDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatListModule,
    HttpClientModule,
    MatCardModule,
    MatTableModule,
    MatBadgeModule,
    MatDialogModule
  ],
  providers: [ErrorService, CategoryService, ProductDetailsService, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

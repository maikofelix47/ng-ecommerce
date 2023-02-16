import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';

import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { MatTabsModule } from '@angular/material/tabs'; 
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { NavbarModule } from '../navbar/navbar.module';



@NgModule({
  declarations: [
    AdminComponent,
    CreateCategoryComponent
  ],
  imports: [
    AdminRoutingModule,
    CommonModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    NgMaterialModule,
    NavbarModule
  ]
})
export class AdminModule { }

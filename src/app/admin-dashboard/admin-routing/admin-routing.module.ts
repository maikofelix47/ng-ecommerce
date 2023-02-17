import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../admin.component';
import { CreateCategoryComponent } from '../category/create-category/create-category.component';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { AdminProductComponent } from '../product/product.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'category',
        component: CreateCategoryComponent,
        title: 'Create Category'
      },
      {
        path: 'product',
        component: AdminProductComponent,
        title: 'Products',
      }
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../admin.component';
import { CreateCategoryComponent } from '../category/create-category/create-category.component';
import { AuthGuardService } from 'src/app/services/auth-guard.service';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'create-category',
        component: CreateCategoryComponent,
        title: 'Create Category',
        canActivate: [AuthGuardService]
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

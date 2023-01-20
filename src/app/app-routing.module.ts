import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { SignUpComponent } from './sign-up/sign-up.component';


import { AuthGuardService } from './services/auth-guard.service';
import { CategoryComponent } from './category/category.component';

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
    component: CategoryComponent,
    title: 'Category'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuardService]
})
export class AppRoutingModule { }

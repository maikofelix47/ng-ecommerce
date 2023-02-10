import { Component } from '@angular/core';
import { Router } from '@angular/router';


import { ErrorMessage } from '../models/error-messages';

import { AuthService } from '../services/auth.service';
import { ErrorService } from '../services/shared/error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public email = '';
  public password = '';

  constructor(private authService: AuthService, 
    private errorService: ErrorService, private router: Router){

  }
  public login(){
     this.resetErrorMessages();
     this.authService.login(this.email, this.password).subscribe((result: any)=> {

     },(error: any)=> {

          const { message } = error?.error;
          const errorMessage: ErrorMessage = {
              message
          };
          this.errorService.setNewErrorMessage(errorMessage);
            
        });
  }

  public resetErrorMessages(){
      this.errorService.resetErrorMessage();
  }

}

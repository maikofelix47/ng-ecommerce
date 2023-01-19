import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

import { ErrorMessage } from '../models/error-messages';
import { ErrorService } from '../services/shared/error.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  public email  = '';
  public password = '';

  constructor(private authService: AuthService, 
    private errorService: ErrorService,
    private router: Router
    ){

  }

  public signUp(){

    this.authService.signUpToFirebaseWithEmailAndPassword(this.email, this.password)
    .then((result: string)=> {
          this.router.navigate(['/login']);
    })
    .catch((error: ErrorMessage)=> {
      console.log('Error', error);
      const { message } = error;
      const errorMessage: ErrorMessage = {
         message
      };
      this.errorService.setNewErrorMessage(errorMessage);
    })

  }

}

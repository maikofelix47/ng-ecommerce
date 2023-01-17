import { Component } from '@angular/core';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public email = '';
  public password = '';

  constructor(private authService: AuthService){

  }
  public login(){
     this.authService.signInToFireBaseWithEmailAndPassword(this.email,this.password);
  }

}

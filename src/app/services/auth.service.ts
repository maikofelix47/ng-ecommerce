import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment, nestBaseUrl } from '../../../environment';

//firebase
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  UserCredential,
} from 'firebase/auth';

//models

import { FirebaseUser } from '../models/firebase-login-response';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public app = initializeApp(environment.firebase);

  public auth = getAuth(this.app);

  private signedInUserSub = new Subject();
  public signedInUser$ = this.signedInUserSub.asObservable();
  private backendBaseUrl = nestBaseUrl;

  constructor(
    private http: HttpClient
  ) {}

 

  signInToFireBaseWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      signInWithEmailAndPassword(this.auth, email, password)
        .then((userCredential: UserCredential) => {
          // Signed in
          const { user } = userCredential;
          localStorage.setItem('user', JSON.stringify(user));
          this.signedInUserSub.next(user);
          resolve('success');
        })
        .catch((error) => {
          console.log('error', error);
          reject(error);
        });
    });
  }

  isAuthorized(): boolean {
    return this.isSessionActive();
  }
  getSignedInUser() {

    const sessionActive = this.isSessionActive();
    if(sessionActive){

      const user = localStorage.getItem('user') || null;
      if (user) {
        return JSON.parse(user);
      }

    }else {
        return {}
    }
   
  }
  getUserToken(): string {
    const user: FirebaseUser = this.getSignedInUser();
    const userToken = user?.stsTokenManager?.accessToken || '';
    return userToken;
  }
  isSessionActive(): boolean{
    const user = localStorage.getItem('user') || null;
    if(user){
      const userObj: FirebaseUser = JSON.parse(user);
      const { stsTokenManager } = userObj;
      const expirationTime = new Date(stsTokenManager.expirationTime);
      const now = new Date();
      const timeDiffinMs = now.getTime() - expirationTime.getTime();
      if (timeDiffinMs < 0) {
        return true;
      } else {
        return false;
      }

    }else{
      return false;
    }
   

  }

  logout(){
      localStorage.removeItem('user');
  }

  signUp(email: string, password: string){
      const url = this.backendBaseUrl + '/auth/sign-up';
      const payload= {
        email,
        password
      };
      return this.http.post(url,payload);
  }
  login(email: string, password: string){

    const url = this.backendBaseUrl + '/auth/sign-in';
    const payload= {
      email,
      password
    };
    return this.http.post(url,payload);

  }
}

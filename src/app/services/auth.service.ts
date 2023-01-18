import { Injectable } from '@angular/core';

import { environment } from '../../../environment';

//firebase
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public app = initializeApp(environment.firebase);

  public auth = getAuth(this.app);

  constructor() { }

  signUpToFirebaseWithEmailAndPassword(email: string, password: string){

    console.log('');

    createUserWithEmailAndPassword(this.auth, email, password)
        .then((userCredential) => {
          // Signed in 
          // const user = userCredential.user;
          console.log('userCredentials', userCredential);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });

  }

  signInToFireBaseWithEmailAndPassword(email: string, password: string): Promise<string>{

    console.log('signInToFireBaseWithEmailAndPassword', email, password);

    return new Promise((resolve,reject)=> {

          signInWithEmailAndPassword(this.auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const  { user } = userCredential;
            localStorage.setItem('user', JSON.stringify(user));
             resolve('success');
          })
          .catch((error) => {
            console.log('error', error);
            reject(error);
          });

    });

   

  }

  isAuthorized(): boolean{

    const user = localStorage.getItem('user') || false;
  if(user){
    const userObj = JSON.parse(user);
    const { lastLoginAt } = userObj;
    const lastLoginDate = new Date(parseInt(lastLoginAt));
    const now = new Date();
    const timeDiffInMinutes = ((now.getTime() - lastLoginDate.getTime())/ 1000)/60;
    console.log('timedifferenceinMinutessinceLastLoggedIn', timeDiffInMinutes);
    if(timeDiffInMinutes < 15){
       return true;
    }else{
      return false;
    }
  }else{
    return false;
  }

  }
}

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

  signInToFireBaseWithEmailAndPassword(email: string, password: string){

    console.log('signInToFireBaseWithEmailAndPassword', email, password);

    signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        // Signed in 
        // const user = userCredential.user;
        console.log('userCredentials', userCredential);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

  }
}

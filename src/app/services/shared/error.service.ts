import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ErrorMessage } from '../../models/error-messages';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  private errorMessages: ErrorMessage[] = [];
  private errrorMsgsSubject = new BehaviorSubject(this.errorMessages);
  public $errors = this.errrorMsgsSubject.asObservable();
  

  constructor() { }

  setNewErrorMessage(error: ErrorMessage){
      const newErrorMessages: ErrorMessage[] = [];
      newErrorMessages.push(error);
      this.errrorMsgsSubject.next(newErrorMessages);
  }

  resetErrorMessage(){
      this.errorMessages = [];
      this.errrorMsgsSubject.next(this.errorMessages);
  }


}

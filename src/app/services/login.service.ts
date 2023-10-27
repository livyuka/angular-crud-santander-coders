import { Injectable } from '@angular/core';
import { Login } from '../model/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private fixedCredentials:Login = {
    email: "email@ada.com",
    password: "senhadificil"
  }

  constructor() {}

  verifyCredentials(email: string, password: string):boolean{
    return email === this.fixedCredentials.email && password === this.fixedCredentials.password
  }

}

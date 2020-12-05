import { Injectable } from '@angular/core';
import { Login } from '../models/login.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  tryLogin(loginObject: Login): boolean {
    if (loginObject.password == '1234' && loginObject.email == '1234') {
      return true;
    }
    return false;
  }
}

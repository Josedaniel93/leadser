import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login, ResponseData } from '../models/login.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) { }

  // tryLogin(loginObject: Login): boolean {
  //   if (loginObject.password == '1234' && loginObject.email == '1234') {
  //     return true;
  //   }
  //   return false;
  // }
  login(loginObject: Login) {
    return this.http.post<ResponseData>(`${environment.API_URL}${environment.URL.LOGIN}`, loginObject).toPromise().then(response => response);
  }
}

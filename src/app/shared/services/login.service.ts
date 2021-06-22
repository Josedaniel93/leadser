import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    const header = new HttpHeaders

    header.set('Access-Control-Allow-Origin', '*')


    return this.http.post<ResponseData>(`${environment.API_URL}${environment.URL.LOGIN}`, loginObject, { 'headers': header }).toPromise().then(response => response);
  }

  // login(email: string, password: string) {
  //   this.http.post(this.uri + '/authenticate', {email: email,password: password})
  //   .subscribe((resp: any) => {

  //     this.router.navigate(['profile']);
  //     localStorage.setItem('auth_token', resp.token);

  //     })
  //     );

  //   }

  logout() {
    localStorage.removeItem('token');
  }

  public get logIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }


}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }


  // login(loginObject: Login) {
  //   return this.http.post<ResponseData>(`${environment.API_URL}${environment.URL.LOGIN}`, loginObject).toPromise().then(response => response);
  // }
}

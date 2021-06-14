import { CreateLogin } from './../../../../shared/models/login.interface';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }


  createBusinessUser(data: CreateLogin) {
    return this.http.post<boolean>(`${environment.API_URL}${environment.URL.CREATEBUSINESS}`, data).toPromise().then(response => response);
  }
  createWorkersUser(data: CreateLogin) {
    return this.http.post<boolean>(`${environment.API_URL}${environment.URL.CREATEWORKER}`, data).toPromise().then(response => response);
  }

  // login(loginObject: Login) {
  //   return this.http.post<ResponseData>(`${environment.API_URL}${environment.URL.LOGIN}`, loginObject).toPromise().then(response => response);
  // }
}

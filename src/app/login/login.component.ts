import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../shared/models/login.interface';
import { LoginService } from '../shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  show: boolean;
  loginObject: Login;
  constructor(private loginService: LoginService, private router: Router) {
    this.show = false;
    this.loginObject = {email:'',password:''}
   }

  ngOnInit(): void {
  }
  showPassword(){
    this.show = !this.show;
  }
  login(){
    if(this.loginService.tryLogin(this.loginObject)){
      this.router.navigate(['/main']);
    }else{
      // TODO ERROR MSG
    }
  }
}

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
    this.loginObject = { email: '', password: '', role: '' }
  }

  ngOnInit(): void {
  }
  showPassword() {
    this.show = !this.show;
  }
  async login() {
    let data = (await this.loginService.login(this.loginObject))
    if (data.result != 'false') {
      if (data.role === 'Admin') {
        this.router.navigate(['/main/admin']);
      } else if (data.role === 'Business') {
        this.router.navigate(['/main/business']);
      } else {
        this.router.navigate(['/main/workers']);
      }

    } else {
      console.log('Incorrect user')
    }
  }
}

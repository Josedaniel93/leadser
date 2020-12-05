import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  show: boolean;

  constructor() {
    this.show = false;

   }

  ngOnInit(): void {
  }
  showPassword(){
    this.show = !this.show;
  }
}

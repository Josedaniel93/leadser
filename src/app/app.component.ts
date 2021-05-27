import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'leadser';
  login: boolean;
  constructor(private router: Router) {
    this.login = true;
  }
  ngOnInit(): void {
    if (this.router.url == '/login') {
      this.login = true;
    } else {
      this.login = false;
    }
  }


}

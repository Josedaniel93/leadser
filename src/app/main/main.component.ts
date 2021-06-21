

import { Router, RouterStateSnapshot } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  title: string;
  route: string;
  urlSplit: string[]

  constructor(private router: Router) {
    this.title = "";

    this.urlSplit = this.splitUrl(router.routerState.snapshot.url);
  }

  ngOnInit(): void {
    this.route = this.urlSplit[this.urlSplit.length - 1];
    this.title = "Leadser" + this.getRoute();
  }
  getRoute() {
    return this.urlSplit[this.urlSplit.length - 1][0].toUpperCase() + this.urlSplit[this.urlSplit.length - 1].slice(1);
  }

  logOut() {
    this.router.navigate(["/login"]);
  }

  splitUrl(fullPath: string): string[] {
    let urlSplit: string[] = fullPath.split('?', 1);
    urlSplit = urlSplit[0].split('/');
    urlSplit.forEach((element, index) => {
      if (element.length === 0) {
        urlSplit.splice(index, 1);
      }
    });
    return urlSplit;
  }

  goDashboard() {
    this.router.navigate(['/main/' + this.urlSplit[this.urlSplit.length - 1]]);
  }
  goCalls() {
    this.router.navigate(['/main/calls']);
  }
  goFormation() {
    this.router.navigate(['/main/formation']);
  }


}

import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  fromNavigation: string;
  private params$: Observable<Params>;
  constructor(private router: Router, private route: ActivatedRoute) {
    this.fromNavigation = "";
    this.params$ = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      switchMap(() => {
        const params = this.route.firstChild?.firstChild?.params

        return params || of()
      })
    )
    this.params$.subscribe((params) => {
      if (params.parent) {
        this.fromNavigation = params.parent;

      }
    })
  }

  getRoute() {
    return this.fromNavigation;

  }


}



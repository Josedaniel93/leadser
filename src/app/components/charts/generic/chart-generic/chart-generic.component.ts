import { Component, Input, OnInit } from '@angular/core';
import { UsersApp } from '../../app/app-widget-test/models/users-app.model';

@Component({
  selector: 'app-chart-generic',
  templateUrl: './chart-generic.component.html',
  styleUrls: ['./chart-generic.component.scss']
})
export class ChartGenericComponent implements OnInit {

  @Input() usersApp: UsersApp[];
  constructor() {
    this.usersApp = [];
  }

  ngOnInit(): void {
  }

  customizeText(items: any) {
    var sortedItems: any[];
    sortedItems = [];

    items.forEach(function (item: any) {
      var startIndex = item.series.stack === "male" ? 0 : 3;
      sortedItems.splice(startIndex, 0, item);
    });
    return sortedItems;
  }

}

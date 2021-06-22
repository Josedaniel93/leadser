import { Component, OnInit } from '@angular/core';
import { SalesTimeData } from './models/sales-time.model';
import { SalesTimeService } from './service/sales-time.service';

@Component({
  selector: 'app-sales-time',
  templateUrl: './sales-time.component.html',
  styleUrls: ['./sales-time.component.scss']
})
export class SalesTimeComponent implements OnInit {

  dataSource: SalesTimeData[];
  options: any[];
  title: string;
  actionCheckForData = this.checkForData.bind(this);
  constructor(private salesTimeService: SalesTimeService) {
    this.dataSource = [];
    this.options = ["2018", "2019", "2020"];
    this.title = "Evolucion de ventas";
  }

  ngOnInit(): void {
    this.salesTimeService.salesTimeDataSubscription.subscribe(result => this.dataSource = result);
    this.checkForData({ value: "2020" });
  }

  checkForData(data: any) {

    this.salesTimeService.getData(data);

  }
}

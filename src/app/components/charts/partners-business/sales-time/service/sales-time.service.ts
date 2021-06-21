import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SalesTimeData } from '../models/sales-time.model';


@Injectable({
  providedIn: 'root'
})
export class SalesTimeService {

  dataSource: SalesTimeData[];
  salesTimeDataSubscription = new BehaviorSubject<SalesTimeData[]>([]);
  title = 'EVOLUCIÓN DE LAS VENTAS';

  constructor() {
    this.dataSource = [


      { date: "1-2018", total: 10 },
      { date: "2-2018", total: 20 },
      { date: "3-2018", total: 30 },
      { date: "4-2018", total: 40 },
      { date: "1-2019", total: 55 },
      { date: "2-2019", total: 95 },
      { date: "3-2019", total: 150 },
      { date: "4-2019", total: 220 },
      { date: "1-2020", total: 280 },
      { date: "2-2020", total: 320 },
      { date: "3-2020", total: 350 },
      { date: "4-2020", total: 420 }


    ];
  }

  getData(year: string) {

    const item = this.dataSource.filter(data => data.date.includes(year));
    if (item) {
      this.salesTimeDataSubscription.next(item);
    }


  }


}

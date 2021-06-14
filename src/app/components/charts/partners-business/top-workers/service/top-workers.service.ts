import { TopWorkersData } from './../models/top-workersmodel';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopWorkersService {

  dataSource: TopWorkersData[];
  //declare object
  maxUsersAppSubscription = new BehaviorSubject<TopWorkersData[]>([]);
  //declare subscription object
  constructor() {
    //declare data type
    this.dataSource = [
      { year: "2020", type: "Pepe", data: 46 },
      { year: "2020", type: "Felipe", data: 53 },
      { year: "2020", type: "Antonia", data: 1 },
      { year: "2019", type: "Felipe", data: 56 },
      { year: "2019", type: "Pepe", data: 42 },
      { year: "2019", type: "Antonia", data: 2 },
      { year: "2018", type: "Felipe", data: 50 },
      { year: "2018", type: "Pepe", data: 49 },
      { year: "2018", type: "Antonia", data: 1 },
      { year: "2017", type: "Felipe", data: 46 },
      { year: "2017", type: "Antonia", data: 53 },
      { year: "2017", type: "Pepe", data: 1 },
      { year: "2016", type: "Pepe", data: 42 },
      { year: "2016", type: "Antonia", data: 57 },
      { year: "2016", type: "Felipe", data: 1 }

    ]

  }
  getData(year: string) {
    //filter to find and modificate
    const item = this.dataSource.filter(data => data.year === year);
    if (item) {
      this.maxUsersAppSubscription.next(item);
      //modificates all ocurrences subscrived
    }

  }
}

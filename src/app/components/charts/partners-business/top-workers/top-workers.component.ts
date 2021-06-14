import { TopWorkersData } from './models/top-workersmodel';
import { Component, OnInit } from '@angular/core';
import { TopWorkersService } from './service/top-workers.service';

@Component({
  selector: 'app-top-workers',
  templateUrl: './top-workers.component.html',
  styleUrls: ['./top-workers.component.scss']
})
export class TopWorkersComponent implements OnInit {

  dataSource: TopWorkersData[];
  options: any[];
  title: string;
  actionCheckForData = this.checkForData.bind(this);

  constructor(private topWorkersService: TopWorkersService) {
    this.dataSource = [];
    this.options = ["2018", "2019", "2020"]
    this.title = "Top vendedores"
  }

  ngOnInit(): void {

    this.topWorkersService.maxUsersAppSubscription.subscribe(result => this.dataSource = result);
    this.checkForData({ value: "2020" });

  }

  checkForData(event: any) {

    this.topWorkersService.getData(event.value);

  }
}

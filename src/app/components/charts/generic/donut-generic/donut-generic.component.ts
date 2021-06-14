import { TopWorkersData } from './../../partners-business/top-workers/models/top-workersmodel';
import { DecimalPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-donut-generic',
  templateUrl: './donut-generic.component.html',
  styleUrls: ['./donut-generic.component.scss']
})
export class DonutGenericComponent implements OnInit {

  @Input() data: TopWorkersData[]
  @Input() concept: string;

  //years: Iterable<string>;
  pipe: any = new DecimalPipe("en-US");

  constructor() {
    this.concept = "";
    this.data = [];
    //this.years = new Set(appService.getData().map(item => item.year));
  }

  ngOnInit(): void {

  }

  customizeLabel(e: any) {
    return `${e.argumentText}\n${e.valueText}`;
  }


  getImagePath() {
    return 'assets/img/user.png';
  }


  changeData() {
    //this.data = this.service.getData(event.itemData);
  }

  exportArrayToExcel() {
    // var wb = XLSX.utils.book_new();
    // var ws = XLSX.utils.json_to_sheet(this.data);
    // XLSX.utils.book_append_sheet(wb, ws, "excel");
    // XLSX.writeFile(wb, 'excel.xlsx');
  }
}

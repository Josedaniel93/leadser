import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-with-select',
  templateUrl: './header-with-select.component.html',
  styleUrls: ['./header-with-select.component.scss']
})
export class HeaderWithSelectComponent implements OnInit {

  @Input() actionCheckForData!: Function;
  @Input() title!: string;
  options: any[];


  constructor() {

    this.options = ["2018", "2019", "2020"]

  }

  ngOnInit(): void {


  }

  checkForData(data: any) {
    this.actionCheckForData(data);
  }
}

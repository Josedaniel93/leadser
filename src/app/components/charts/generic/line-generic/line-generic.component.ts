import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-generic',
  templateUrl: './line-generic.component.html',
  styleUrls: ['./line-generic.component.scss']
})
export class LineGenericComponent implements OnInit {
  @Input() dataSource: any[];

  constructor() { 
    this.dataSource = [];
  }

  ngOnInit(): void {
  }

}

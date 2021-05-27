import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bubble-info-generic',
  templateUrl: './bubble-info-generic.component.html',
  styleUrls: ['./bubble-info-generic.component.scss']
})
export class BubbleInfoGenericComponent implements OnInit {
  @Input() item!: any;
  @Input() position!: number;

  constructor() {
  }

  ngOnInit(): void {
  }

}

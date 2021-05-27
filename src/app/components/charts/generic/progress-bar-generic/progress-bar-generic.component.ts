import { AfterViewInit, Component, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-progress-bar-generic',
  templateUrl: './progress-bar-generic.component.html',
  styleUrls: ['./progress-bar-generic.component.scss']
})
export class ProgressBarGenericComponent implements OnInit {
  @ViewChild('bar') bar!: HTMLElement;

  @Input() title!: string;
  @Input() total!: number;
  @Input() percentage!: number;

  randomColor!: string;

  constructor() { }

  ngOnInit(): void {
    this.randomColor = this.getRandomColor();
  }

  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }

}

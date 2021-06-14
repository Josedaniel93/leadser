import { VideoContent } from './../../../shared/models/video-content.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {
  videoContent: VideoContent;
  videos: string[];
  video: string;
  constructor() {
    this.videoContent = new VideoContent;
    this.videos = this.videoContent.telecomunicaciones;
    this.video = this.videos[0];
  }

  ngOnInit(): void {



  }

  selectOption(data: string) {
    if (data === "telecomunicaciones") {
      this.videos = this.videoContent.telecomunicaciones
    } else if (data === "banca") {
      this.videos = this.videoContent.banca
    } else if (data === "seguros") {
      this.videos = this.videoContent.seguros
    } else {
      this.videos = this.videoContent.dataFarm
    }
    this.video = this.videos[0];
  }

  goBack() {

  }

  goNext() {

  }
}

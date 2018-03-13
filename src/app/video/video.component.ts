import { Component, OnInit } from '@angular/core';
import { NavData } from '../main/main-model';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  navData:Array<NavData> = [
    {
      navName:'视频',
      navUrl:'/video'
    },{
      navName:'MV',
      navUrl:'/video/mv'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { VideoData } from '../../main/main-model';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  videosData:Array<VideoData> = [
    {
      id:1,
      url:'http://placehold.it/245x140',
      content:'sdfs',
      src:'http://www.w3school.com.cn/tiy/loadtext.asp?f=html5_video'
    }
  ]
    
  

  constructor() { }

  ngOnInit() {
  }

}

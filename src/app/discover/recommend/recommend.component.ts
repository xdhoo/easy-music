import { Component, OnInit } from '@angular/core';
import { ListData } from '../../main/main-model';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.css']
})
export class RecommendComponent implements OnInit {

  listData:Array<ListData> = [
    {
      id:1,
      title:'采样的魅力',
      url:'http://placehold.it/180x180',
      userName:'Aric',
      createDate:'2017-01-12',
      listener:230,
      content:'采样通常是指从那些比较具有时代特色或有一定影响力的老歌曲中抽取出部分较为突出或具有可循环性的音轨或节拍，将这个部分作为新歌曲参考的样本（运用到其中），在此之上进行改编和创作。',
      music:[
        {
          id:1,
          micName:'Chill Bill',
          singer:'the ShowBoys',
          album:'Chill Bill',
          time:'04:22'
        },{
          id:2,
          micName:'Chill Bill',
          singer:'the ShowBoys',
          album:'Chill Bill',
          time:'04:22'
        },{
          id:3,
          micName:'Chill Bill',
          singer:'the ShowBoys',
          album:'Chill Bill',
          time:'04:22'
        }
      ]
    },{
      id:2,
      title:'采样的魅力',
      url:'http://placehold.it/180x180',
      userName:'Aric',
      createDate:'2017-01-12',
      listener:230,
      content:'采样通常是指从那些比较具有时代特色或有一定影响力的老歌曲中抽取出部分较为突出或具有可循环性的音轨或节拍，将这个部分作为新歌曲参考的样本（运用到其中），在此之上进行改编和创作。',
      music:[
        {
          id:1,
          micName:'Chill Bill',
          singer:'the ShowBoys',
          album:'Chill Bill',
          time:'04:22'
        },{
          id:2,
          micName:'Chill Bill',
          singer:'the ShowBoys',
          album:'Chill Bill',
          time:'04:22'
        },{
          id:3,
          micName:'Chill Bill',
          singer:'the ShowBoys',
          album:'Chill Bill',
          time:'04:22'
        }
      ]
    },{
      id:3,
      title:'采样的魅力',
      url:'http://placehold.it/180x180',
      userName:'Aric',
      createDate:'2017-01-12',
      listener:230,
      content:'采样通常是指从那些比较具有时代特色或有一定影响力的老歌曲中抽取出部分较为突出或具有可循环性的音轨或节拍，将这个部分作为新歌曲参考的样本（运用到其中），在此之上进行改编和创作。',
      music:[
        {
          id:1,
          micName:'Chill Bill',
          singer:'the ShowBoys',
          album:'Chill Bill',
          time:'04:22'
        },{
          id:2,
          micName:'Chill Bill',
          singer:'the ShowBoys',
          album:'Chill Bill',
          time:'04:22'
        },{
          id:3,
          micName:'Chill Bill',
          singer:'the ShowBoys',
          album:'Chill Bill',
          time:'04:22'
        }
      ]
    },{
      id:4,
      title:'采样的魅力',
      url:'http://placehold.it/180x180',
      userName:'Aric',
      createDate:'2017-01-12',
      listener:230,
      content:'采样通常是指从那些比较具有时代特色或有一定影响力的老歌曲中抽取出部分较为突出或具有可循环性的音轨或节拍，将这个部分作为新歌曲参考的样本（运用到其中），在此之上进行改编和创作。',
      music:[
        {
          id:1,
          micName:'Chill Bill',
          singer:'the ShowBoys',
          album:'Chill Bill',
          time:'04:22'
        },{
          id:2,
          micName:'Chill Bill',
          singer:'the ShowBoys',
          album:'Chill Bill',
          time:'04:22'
        },{
          id:3,
          micName:'Chill Bill',
          singer:'the ShowBoys',
          album:'Chill Bill',
          time:'04:22'
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}

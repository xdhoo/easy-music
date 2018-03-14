import { Component, OnInit } from '@angular/core';
import { RankData, ListData } from '../../main/main-model';

@Component({
  selector: 'app-ranking-list',
  templateUrl: './ranking-list.component.html',
  styleUrls: ['./ranking-list.component.css']
})
export class RankingListComponent implements OnInit {

  rankData:Array<RankData> = [
    {
      rankName:'飙升榜',
      rankImg:'assets/images/rank/1.jpg',
      musiclist:[
        {
          id:1,
          micName:'惊叹号',
          singer:'周杰伦',
          album:'摩杰座',
          time:'2011-01-18'
        }, {
          id:2,
          micName:'如常',
          singer:'房东的猫',
          album:'如常',
          time:'2011-01-18'
        }, {
          id:3,
          micName:'慢慢喜欢你',
          singer:'莫文蔚',
          album:'如常',
          time:'2011-01-18'
        },{
          id:4,
          micName:'慢慢喜欢你',
          singer:'莫文蔚',
          album:'如常',
          time:'2011-01-18'
        },{
          id:5,
          micName:'慢慢喜欢你',
          singer:'莫文蔚',
          album:'如常',
          time:'2011-01-18'
        }
      ]
    },{
      rankName:'新歌榜',
      rankImg:'assets/images/rank/2.jpg',
      musiclist:[
        {
          id:1,
          micName:'惊叹号',
          singer:'周杰伦',
          album:'摩杰座',
          time:'2011-01-18'
        }
      ]
    },{
      rankName:'原创榜',
      rankImg:'assets/images/rank/3.jpg',
      musiclist:[
        {
          id:1,
          micName:'惊叹号',
          singer:'周杰伦',
          album:'摩杰座',
          time:'2011-01-18'
        }
      ]
    }
  ];

  listData:Array<ListData> = [
    {
      id:1,
      title:'采样的魅力',
      url:'assets/images/m-list/1.jpg',
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
      url:'assets/images/m-list/2.jpg',
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
      url:'assets/images/m-list/3.jpg',
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
      url:'assets/images/m-list/4.jpg',
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

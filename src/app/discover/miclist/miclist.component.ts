import { Component, OnInit } from '@angular/core';
import { TagData, ListData } from '../../main/main-model';

@Component({
  selector: 'app-miclist',
  templateUrl: './miclist.component.html',
  styleUrls: ['./miclist.component.css']
})
export class MiclistComponent implements OnInit {

  tagData:TagData = {
    title:'热门标签',
    tags:[
      {
        id:1,
        tagName:"华语",
        url:'sdf'
      },{
        id:2,
        tagName:"流行",
        url:'sdf'
      },{
        id:3,
        tagName:"摇滚",
        url:'sdf'
      },{
        id:4,
        tagName:"民谣",
        url:'sdf'
      },{
        id:5,
        tagName:"电子",
        url:'sdf'
      },{
        id:6,
        tagName:"轻音乐",
        url:'sdf'
      },{
        id:7,
        tagName:"影视原声",
        url:'sdf'
      },{
        id:8,
        tagName:"ACG",
        url:'sdf'
      },{
        id:9,
        tagName:"怀旧",
        url:'sdf'
      },{
        id:10,
        tagName:"治愈",
        url:'sdf'
      }
    ]
  };

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
          src:'',
          album:'Chill Bill',
          time:'04:22'
        },{
          id:2,
          micName:'Chill Bill',
          singer:'the ShowBoys',
          src:'',
          album:'Chill Bill',
          time:'04:22'
        },{
          id:3,
          micName:'Chill Bill',
          singer:'the ShowBoys',
          src:'',
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
          src:'',
          album:'Chill Bill',
          time:'04:22'
        },{
          id:2,
          micName:'Chill Bill',
          singer:'the ShowBoys',
          src:'',
          album:'Chill Bill',
          time:'04:22'
        },{
          id:3,
          micName:'Chill Bill',
          singer:'the ShowBoys',
          src:'',
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

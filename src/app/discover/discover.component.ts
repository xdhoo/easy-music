import { Component, OnInit } from '@angular/core';
import { NavData } from '../main/main-model';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {

  navData:Array<NavData> = [
    {
      navName:'个性推荐',
      navUrl:'/discover/recommend'
    },{
      navName:'歌单',
      navUrl:'/discover/miclist'
    },{
      navName:'主播电台',
      navUrl:'/discover/radio'
    },{
      navName:'排行榜',
      navUrl:'/discover/rank'
    },{
      navName:'歌手',
      navUrl:'/discover/singer'
    }
    // ,{
    //   navName:'最新音乐',
    //   navUrl:'/discover/latestmic'
    // }
  ]

  constructor() { }

  ngOnInit() {
  }

}

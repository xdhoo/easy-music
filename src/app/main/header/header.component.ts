import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <div class="h-content">
    <div class="col-md-2">
      <h4>EASY - MUSIC</h4>
    </div>
    <div class="col-md-3">
      <input type="text" placeholder="搜索音乐，视频，歌词，电台">
    </div>
    <div class="col-md-4"></div>
    <div class="col-md-3">
      <a>未登录</a>
    </div>
  </div>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

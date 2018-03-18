import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  template: `
  <div class="h-content">
    <div class="col-md-2">
      <h4>EASY - MUSIC</h4>
    </div>
    <div class="col-md-3">
      <input type="text" placeholder="搜索音乐，视频，歌词，电台" [(ngModel)]="key">
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

  key;
  params;
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  onSearch(){
    this.params = {
      "TransCode": "020116",
      "OpenId": "123456789",
      "Body": {
        "key": this.key
      }
    }
    this.http.post('https://api.hibai.cn/api/index/index',this.params)
      .subscribe(res=>{console.log(res)})
  }
}

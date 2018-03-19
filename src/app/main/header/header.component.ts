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
      <input type="text" placeholder="搜索音乐，视频，歌词，电台" [(ngModel)]="key"><button (click)="onSearch()">search</button>
    </div>
    <div class="col-md-4"></div>
    <div class="col-md-3">
      
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
      "TransCode": "020112",
      "OpenId": "123456789",
      "Body": {
          "SongListId": "141998290"
      }
  }
    // this.http.get('/apis/api/v3/song/detail?id=418603077&c=[{"id":"418603077"}]').subscribe(res =>console.log(res))
    this.http.post('/apis/api/index/index',this.params)
      .subscribe(res=>{console.log(res)})
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `
  <div class="h-content">
    <div class="col-md-2">
      <h4>EASY - MUSIC</h4>
    </div>
    <div class="col-md-3">
      <input type="text" #box placeholder="搜索音乐，视频，歌词，电台" (keyup.enter)="onEnter(box.value)" [(ngModel)]="key">
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
  constructor(private http: HttpClient, private route: Router) { }

  ngOnInit() {
  }

  onEnter(value) {
    this.route.navigate(['discover/search'], {
      queryParams: {
        key: value
      }
    });
  }
}

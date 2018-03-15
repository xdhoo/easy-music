import { Component, OnInit, Input } from '@angular/core';
import { ListData } from '../main-model';

@Component({
  selector: 'app-v-list',
  template: `
  <div class="c-list">
    <ul class="list-inline">
      <li *ngFor="let item of data">
        <div class="c-list-img">
          <a routerLink="/video/videos/{{item.id}}">
            <img [src]=item.url alt="">
          </a>
          <div class="c-list-top">
            <span><i class="fa fa-video-camera"></i> {{item.listener}}万</span>          
          </div>
        </div>      
        <p>{{item.title}}</p>
      </li>
    </ul>
  </div>
  `
})
export class VListComponent implements OnInit {
  
  @Input() data:ListData
  constructor() { }

  ngOnInit() {
  }

}

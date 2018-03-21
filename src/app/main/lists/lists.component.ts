import { Component, OnInit, Input } from '@angular/core';
import { ListData } from '../main-model';

@Component({
  selector: 'app-lists',
  template: `
  <div class="c-list">
    <ul class="list-inline">
      <li *ngFor="let item of data">
        <div class="c-list-img">
          <a [routerLink]="['/discover/playlist']" [queryParams]="{id:item.id,type:2,ltype:item.title}">
            <img [src]=item.src alt="" title="{{item.title || item.name}}">
          </a>
          <div class="c-list-bottom">
            <span><i class="fa fa-music"></i> {{item.times}}</span>
            <a href=""><i class="fa fa-play-circle-o"></i></a>            
          </div>
        </div>      
        <p title="{{item.title}}">{{item.title | titleFormat:13}}</p>
        <p title="{{item.name}}">{{item.name | titleFormat:13}}</p>
      </li>
    </ul>
  </div>
  `
})
export class ListsComponent implements OnInit {

  @Input() data;

  constructor() { }

  ngOnInit() {
  }

}

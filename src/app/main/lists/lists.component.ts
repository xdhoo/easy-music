import { Component, OnInit, Input } from '@angular/core';
import { ListData } from '../main-model';

@Component({
  selector: 'app-lists',
  template: `
  <div class="c-list">
    <ul class="list-inline">
      <li *ngFor="let item of data">
        <div class="c-list-img">
          <a href="">
            <img [src]=item.url alt="">
          </a>
          <div class="c-list-bottom">
            <span><i class="fa fa-music"></i> {{item.listener}}万</span>
            <a href=""><i class="fa fa-play-circle-o"></i></a>            
          </div>
        </div>      
        <p>{{item.title}}</p>
      </li>
    </ul>
  </div>
  `
})
export class ListsComponent implements OnInit {

  @Input() data:ListData

  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }

}
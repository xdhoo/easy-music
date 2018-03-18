import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rank',
  template: `
  <div class="rk-content">
    <dl *ngFor="let item of data">
      <dt>
        <div><img [src]="item.src" alt=""></div>
      </dt>
      <dd>
        <ol class="rk-ol">
          <li *ngFor="let mic of item.tracks.slice(0,8);index as i" title="{{mic.name}}">
          <a><span class="rk-ord" [ngClass]="{'tx-red':i<3}">{{i+1}} </span> {{mic.name}} - 
          <span *ngFor="let art of mic.artists.slice(0,2)">{{art.name}} </span></a>
          </li>
        </ol>
        <div class="rk-more text-right"><a [routerLink]="['/playlist']" [queryParams]="{id:item.id,type:1}">查看全部>></a></div>
      </dd>
    </dl>
  </div>
  `
})
export class RankComponent implements OnInit {

  @Input() data
  constructor() { }

  ngOnInit() {
  }

}

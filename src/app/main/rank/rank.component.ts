import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rank',
  template: `
  <div class="rk-content">
    <dl *ngFor="let item of data">
      <dt>
        <div><img [src]="item.rankImg" alt=""></div>
      </dt>
      <dd>
        <ol>
          <li *ngFor="let mic of item.musiclist;index as i">
          <span>{{i+1}} </span> {{mic.micName}}
          </li>
        </ol>
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

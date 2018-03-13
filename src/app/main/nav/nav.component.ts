import { Component, OnInit,Input } from '@angular/core';
import { NavData } from '../main-model';

@Component({
  selector: 'app-nav',
  template: `
  <div class="c-nav">
    <ul class="list-inline">
      <li *ngFor="let item of data"><a [routerLink]=item.navUrl>{{item.navName}}</a></li>
    </ul>
  </div>  
  `
})
export class NavComponent implements OnInit {

  @Input() data:NavData

  constructor() { }

  ngOnInit() {
  }

}

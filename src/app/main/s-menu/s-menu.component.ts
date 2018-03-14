import { Component, OnInit, Input } from '@angular/core';
import { MusicData } from '../main-model';

@Component({
  selector: 'app-s-menu',
  template: `
  <div class="s-menu">
    <table class="table table-striped">
      <thead>
        <th></th>
        <th>操作</th>
        <th>音乐标题</th>
        <th>歌手</th>
        <th>专辑</th>
        <th>时长</th>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
  `
})
export class SMenuComponent implements OnInit {

  @Input() data:MusicData;

  constructor() { }

  ngOnInit() {
  }

}

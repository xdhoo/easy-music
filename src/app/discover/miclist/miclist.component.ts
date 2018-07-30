import { Component, OnInit } from '@angular/core';
import { TagData, ListData } from '../../main/main-model';
import { GetDataService } from '../../service/get-data.service';

@Component({
  selector: 'app-miclist',
  templateUrl: './miclist.component.html',
  styleUrls: ['./miclist.component.css'],
  providers: [GetDataService]
})
export class MiclistComponent implements OnInit {

  tagData: TagData = {
    title: '热门标签',
    tags: [
      {
        id: 1,
        tagName: '华语',
        url: 'sdf'
      }, {
        id: 2,
        tagName: '流行',
        url: 'sdf'
      }, {
        id: 3,
        tagName: '摇滚',
        url: 'sdf'
      }, {
        id: 4,
        tagName: '民谣',
        url: 'sdf'
      }, {
        id: 5,
        tagName: '电子',
        url: 'sdf'
      }, {
        id: 6,
        tagName: '轻音乐',
        url: 'sdf'
      }, {
        id: 7,
        tagName: '影视原声',
        url: 'sdf'
      }, {
        id: 8,
        tagName: 'ACG',
        url: 'sdf'
      }, {
        id: 9,
        tagName: '怀旧',
        url: 'sdf'
      }, {
        id: 10,
        tagName: '治愈',
        url: 'sdf'
      }
    ]
  };

  listData;
  constructor(private getdata: GetDataService) { }

  ngOnInit() {
    this.getdata.getPlayLists()
    .then(res => {
      this.listData = res;
    });

  }

}

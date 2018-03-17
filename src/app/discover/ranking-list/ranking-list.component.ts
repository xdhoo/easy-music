import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { RankData, ListData } from '../../main/main-model';
import { GetDataService } from '../../service/get-data.service';

@Component({
  selector: 'app-ranking-list',
  templateUrl: './ranking-list.component.html',
  styleUrls: ['./ranking-list.component.css'],
  providers:[GetDataService]
})
export class RankingListComponent implements OnInit {

  rankData;
  listData;
  constructor(public getDataService:GetDataService,private http:HttpClient) { }

  ngOnInit() {

    this.getDataService.getRankLists()
      .then(res => {
        let _list;
        _list = res;
        this.rankData = _list.filter((value,index) => index < 3)
        this.listData = _list.filter((value,index) => index > 2);
      });
  }

}

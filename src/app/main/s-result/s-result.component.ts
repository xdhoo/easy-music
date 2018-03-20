import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../service/get-data.service';
import { ActivatedRoute, Params} from '@angular/router';
import { AudioService } from '../../service/audio.service';

@Component({
  selector: 'app-s-result',
  templateUrl: './s-result.component.html',
  styleUrls: ['./s-result.component.css']
})
export class SResultComponent implements OnInit {

  resultData;
  searchValue;
  constructor(
    private getdata:GetDataService,
    private route:ActivatedRoute,
    private audio:AudioService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.searchValue = params.key
    });

    this.getdata.getSearchlist(this.searchValue)
    .then(res => {
      this.resultData = res;
      console.log(res);
    })
    .catch()
  }
  onPlay(list){
    let pattern = /=(.*?)&/
    let _id = pattern.exec(list.url);
    list.src = "http://music.163.com/song/media/outer/url?id="+_id[1];
    this.audio.Add(list);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { GetDataService } from '../../service/get-data.service';
import { AudioService } from '../../service/audio.service';
@Component({
  selector: 'app-s-list',
  templateUrl: './s-list.component.html',
  styleUrls: ['./s-list.component.css']
})
export class SListComponent implements OnInit {

  listId:any;
  type:any;
  ltype:any;
  listData = { };
  constructor(
    private route:ActivatedRoute,
    private getdata:GetDataService,
    private audio:AudioService
  ) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.listId = params.id;
      this.type = params.type;
      this.ltype =params.ltype;
    });
    if(this.type == 1){
      this.getdata.getRanklist(this.listId)
      .then(res => {
        this.listData = res;
      })
      .catch()
    }else{
      if(this.ltype){
        this.getdata.getPlayList(this.listId)
        .then(res => {
          this.listData = res.result;
        })
        .catch()
      }else{
        this.getdata.getSingerlist(this.listId)
        .then(res => {
          this.listData = res;
        })
        .catch()
      }
      
    }    
  }
  onPlay(list){
    list.src = "http://music.163.com/song/media/outer/url?id="+list.id;
    this.audio.Add(list);
  }

}

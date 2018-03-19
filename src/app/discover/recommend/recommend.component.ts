import { Component, OnInit } from '@angular/core';
import { ListData } from '../../main/main-model';
import { HttpClient } from '@angular/common/http';
import { Jsonp } from '@angular/http';
import 'rxjs/add/operator/toPromise'
import { GetDataService } from '../../service/get-data.service';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.css']
})
export class RecommendComponent implements OnInit {

  playlist;
  playlists;

  constructor(private http:HttpClient,private jsonp:Jsonp,private getdata:GetDataService) { }

  ngOnInit() {

    this.getdata.getPlayLists().then(data => {
      let _playlists ;
      _playlists= data;
      this.playlist = _playlists.filter((value,index) =>{
        if(index < 8){
          return value;
        }else {
          return;
        }
      })
    }).catch()
  }

  ontest(){
    let url ='http://music.163.com/api/v3/song/detail?id=418603077&c=[{"id":"418603077"}]'
    // this.http.post(url,{}).subscribe(data =>{
    //   console.log(data);
    // })
    this.http.jsonp(url,'__ng_jsonp__.__req0.finished').subscribe(data =>{
    console.log(data);
    })
    // var params = new URLSearchParams();
    // params.set("callback","__ng_jsonp__.__req0.finished");
    // this.jsonp.get('http://music.163.com/discover/toplist?id=3779629&callback=__ng_jsonp__.__req5.finished').subscribe(data =>{
    //   var pattern = /<textarea style="display:none;">(.*?)<\/textarea>/
    //   console.log(data);
    //   //var reslut =  pattern.exec(data)
    //   //console.log(reslut[1])
    // })
  }

}

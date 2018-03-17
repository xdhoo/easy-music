import { Component, OnInit } from '@angular/core';
import { ListData } from '../../main/main-model';
import { HttpClient } from '@angular/common/http';
import { Jsonp } from '@angular/http';
import 'rxjs/add/operator/toPromise'

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.css']
})
export class RecommendComponent implements OnInit {

  playlist;
  playlists;
  videoData:Array<ListData> = [
    {
      id:1,
      title:'采样的魅力',
      url:'http://placehold.it/245x140',
      userName:'Aric',
      createDate:'2017-01-12',
      listener:230,
      content:'采样通常是指从那些比较具有时代特色或有一定影响力的老歌曲中抽取出部分较为突出或具有可循环性的音轨或节拍，将这个部分作为新歌曲参考的样本（运用到其中），在此之上进行改编和创作。',
      music:[
        {
          id:1,
          micName:'Chill Bill',
          singer:'the ShowBoys',
          src:'',
          album:'Chill Bill',
          time:'04:22'
        },{
          id:2,
          micName:'Chill Bill',
          singer:'the ShowBoys',
          src:'',
          album:'Chill Bill',
          time:'04:22'
        },{
          id:3,
          micName:'Chill Bill',
          singer:'the ShowBoys',
          src:'',
          album:'Chill Bill',
          time:'04:22'
        }
      ]
    },{
      id:2,
      title:'采样的魅力',
      url:'http://placehold.it/245x140',
      userName:'Aric',
      createDate:'2017-01-12',
      listener:230,
      content:'采样通常是指从那些比较具有时代特色或有一定影响力的老歌曲中抽取出部分较为突出或具有可循环性的音轨或节拍，将这个部分作为新歌曲参考的样本（运用到其中），在此之上进行改编和创作。',
      music:[
        {
          id:1,
          micName:'Chill Bill',
          singer:'the ShowBoys',
          src:'',
          album:'Chill Bill',
          time:'04:22'
        },{
          id:2,
          micName:'Chill Bill',
          singer:'the ShowBoys',
          src:'',
          album:'Chill Bill',
          time:'04:22'
        },{
          id:3,
          micName:'Chill Bill',
          singer:'the ShowBoys',
          src:'',
          album:'Chill Bill',
          time:'04:22'
        }
      ]
    },{
      id:3,
      title:'采样的魅力',
      url:'http://placehold.it/245x140',
      userName:'Aric',
      createDate:'2017-01-12',
      listener:230,
      content:'采样通常是指从那些比较具有时代特色或有一定影响力的老歌曲中抽取出部分较为突出或具有可循环性的音轨或节拍，将这个部分作为新歌曲参考的样本（运用到其中），在此之上进行改编和创作。',
      music:[
        {
          id:1,
          micName:'Chill Bill',
          singer:'the ShowBoys',
          src:'',
          album:'Chill Bill',
          time:'04:22'
        },{
          id:2,
          micName:'Chill Bill',
          singer:'the ShowBoys',
          src:'',
          album:'Chill Bill',
          time:'04:22'
        },{
          id:3,
          micName:'Chill Bill',
          singer:'the ShowBoys',
          src:'',
          album:'Chill Bill',
          time:'04:22'
        }
      ]
    }
  ]

  constructor(private http:HttpClient,private jsonp:Jsonp) { }

  ngOnInit() {

    this.http.get('assets/json/playlist.json').toPromise().then(data => {
      let _playlists ;
      _playlists= data;
      this.playlist = _playlists.filter((value,index) =>{
        if(index < 8){
          return value;
        }else {
          return;
        }
      })
    })
    // .subscribe(data =>{
      
    //   this.playlist = data;
      
    // })
  }

  ontest(){
    this.http.get(`/api/discover/toplist?id=33779629`).subscribe(data =>{
      console.log(data);
    })
    // this.http.jsonp('http://music.163.com/discover/toplist?id=3779629',"1").subscribe(data =>{
    // console.log(data);
    // })
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

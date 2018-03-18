import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GetDataService {

  constructor(private http:HttpClient){

  }
  public getPlayLists(){
    return this.http.get('assets/json/playlist.json')
      .toPromise()
      .then(res =>res)
      .catch()
  }
  public getPlayList(id:string){
    return this.http.get('assets/json/list-detail.json')
      .toPromise()
      .then(data =>{
        let _playlist;
        _playlist = data;
        return _playlist.find((value) =>value.id == id);
      })
      .catch()
  };

  public getRankLists(){
    return this.http.get('assets/json/ranking-list.json')
      .toPromise()
      .then(res => res)
      .catch()
  };

  public getRanklist(id){
    return this.http.get('assets/json/ranking-list.json')
      .toPromise()
      .then(data => {
        let _ranllist;
        _ranllist = data;
        return _ranllist.find(value => value.id == id);
      })
      .catch()
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GetDataService {

  private url = 'http://122.152.225.121:3333';
  constructor(private http: HttpClient) {

  }
  public getPlayLists() {
    return this.http.get('assets/json/playlist.json')
      .toPromise()
      .then(res => res)
      .catch();
  }
  public getPlayList(id: string) {
    const params = {
      'TransCode': '020111',
      'OpenId': '123456789',
      'Body': {
          'SongListId': id
      }
    };
    return this.http.post(this.url + '/api/index/index', params)
      .toPromise()
      .then(res => res)
      .catch();
  }

  public getRankLists() {
    return this.http.get('assets/json/ranking-list.json')
      .toPromise()
      .then(res => res)
      .catch();
  }

  public getRanklist(id) {
    const params = {
      'TransCode': '020111',
      'OpenId': '123456789',
      'Body': {
          'SongListId': id
      }
    };
    return this.http.post(this.url + '/api/index/index', params)
      .toPromise()
      .then(res => res)
      .catch();
  }

  public getSearchlist(value) {
    const params = {
      'TransCode': '020116',
      'OpenId': '123456789',
      'Body': {
          'key': value
      }
    };
    return this.http.post(this.url + '/api/index/index', params)
      .toPromise()
      .then(res => res)
      .catch();
  }
  public getSingerlists() {
    return this.http.get('assets/json/artists.json')
      .toPromise()
      .then(res => res)
      .catch();
  }
  public getSingerlist(id) {
    return this.http.get('assets/json/artists.json')
      .toPromise()
      .then(data => {
        let _sinlist;
        _sinlist = data;
        return _sinlist.find(value => value.id === id);
      })
      .catch();
  }
}

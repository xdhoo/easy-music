import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GetPlayListService {

  private http:HttpClient;

  public getPlayLlist(id:string){
    this.http.get('assets/json/')
  }
}
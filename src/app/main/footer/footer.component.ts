import { Component, OnInit } from '@angular/core';
import { PlayData } from '../main-model';
import { AudioService } from '../../service/audio.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  private _left;
  private _width;
  private _rStart;
  playData:any;
  playlists:any;
  listTag:boolean = false;

  flag:boolean;
  percent;

  constructor(public audio:AudioService) {
  }

  ngOnInit() {

    this.audio.cast.subscribe({
      next:value =>{this.playData = value}
    })
    this._left = $('#f_progressD').offset().left;
    this._width = $('#f_progressD').width();
    this.flag = false;
    let that = this;
    $('#range').mousedown(function(e){
      that._rStart = e.pageX;
      that.flag = true;
    });

    $(document).mouseup(function(e){
      that.flag = false;
    });

    $('#f_progress').mousemove(function(e){
      if(that.flag){
        that.percent = (e.pageX - that._left) /that._width;
        that.audio.Skip(that.percent);
      }
    })
  }
  
  progressClick(e){
    if(!this.flag) {
      this.percent = (e.pageX - this._left) /this._width;
      this.audio.Skip(this.percent);
    }
  }

  onplay(){
    this.audio.Toogle();
    this.audio.cast.subscribe({
      next:value =>{this.playData = value}
    })
  };

  onNext(){
    this.audio.Next();
  };

  onPrev(){
    this.audio.Prev();
  };

  onList(){
    if(this.listTag){
      $('#listModal').modal('hide');
      this.listTag = false;
    } else {
      $('#listModal').modal('show');
      this.playlists = this.audio.PlayList();
      this.listTag = true;
    }
  }
  onPlayIt(item){
    this.audio.Toogle(item);
  }
}

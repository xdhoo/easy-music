import { Component, OnInit } from '@angular/core';
import { FooterService } from './footer.service';
import { PlayData } from '../main-model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers:[FooterService]
})
export class FooterComponent implements OnInit {

  private _left;
  private _width;
  private _rStart;
  playData:PlayData = {
    Index:0,
    IsPlaying:false,
    MicName:'',
    Style:1,
    Current:0,
    Data:0,
  };

  flag:boolean;
  percent;

  constructor(public audio:FooterService) {
  }

  ngOnInit() {
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
    this.playData = this.audio.PlayData();
    
    this.audio.Add({id:2,
      micName:'Chill Bill',
      singer:'the ShowBoys',
      src:'assets/audio/1.mp3',
      album:'Chill Bill',
      time:'04:22'})
  };

  onNext(){
    this.audio.Next();
  };

  onPrev(){
    this.audio.Prev();
  }

}

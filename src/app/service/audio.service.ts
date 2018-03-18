import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AudioService {

  private _audio: HTMLAudioElement;
  private playData = {
    Index:0,
    IsPlaying:false,
    MicName:'',
    artist:'',
    Style:0,
    Current:0,
    Data:0,
    percent:''
  }
  private playdata = new BehaviorSubject<any>(this.playData);
  cast = this.playdata.asObservable();
  
  private playList = [];
  private listenInterval;
  constructor(){
    this._audio = document.createElement('audio');
    this._audio.autoplay = false;
    this._audio.onplay = () => {
      
      let that = this;
      this.listenInterval = window.setInterval(() => {
        that.playData.Current = that._audio.currentTime;
        that.playData.Data = that._audio.duration;
        that.playData.percent = (that.playData.Current / that.playData.Data)*100 +'%';
      },1000);
      this.playData.IsPlaying = true;
      this.playdata.next(this.playData);      
    };
    this._audio.onended = () => {
      window.clearInterval(this.listenInterval);
      this.FillPlayData();
      this.playData.IsPlaying = false;
    };
    this._audio.onpause = () => {
      window.clearInterval(this.listenInterval);
      this.playData.Current = this._audio.currentTime;
      this.playData.IsPlaying = false;
    }

  }

  public Toogle(audio?):void{
    let tryGet = audio ? this.playList.findIndex((p) => p.src ===audio.src) :this.playData.Index;
    if(tryGet < 0) {
      this.playList.push(audio);
      this.PlayIndex(this.playList.length);
    }else{
      if(tryGet === this.playData.Index) {
        if(this._audio.paused) {
          this._audio.play();
          this.playData.IsPlaying = true;
        }else{
          this._audio.pause();
          this.playData.IsPlaying = false;
        }
      }else {
        this.PlayIndex(tryGet);
      }
    }
  }

  public Add(audio):void{
    this.playList.push(audio);
    if(this.playList.length === 1){
      this.PlayIndex(0);
      this.playData.MicName = audio.name;
      this.playData.artist = audio.artists[0].name
    }

  }

  public Next(): void {
    switch (this.playData.Style) {
      case 0:
        if (this.playData.Index < this.playList.length) {
            this.playData.Index++;
            this.PlayIndex(this.playData.Index);
        }
        break;
      case 1:
        this.playData.Index = (this.playData.Index + 1) % this.playList.length;
        this.PlayIndex(this.playData.Index);        
        break;
      case 2:
        this.playData.Index = (this.playData.Index + 1) % this.playList.length;
        this.PlayIndex(this.playData.Index);
        console.log('暂不考虑随机播放将视为列表循环播放');
        break;
      case 3:
        this._audio.currentTime = 0;
        break;
      default:
      if (this.playData.Index < this.playList.length) {
            this.playData.Index++;
            this.PlayIndex(this.playData.Index);
        }
        break;
    }
  }  
  
  public Prev(): void {
    switch (this.playData.Style) {
      case 0:
        if (this.playData.Index >0) {
            this.playData.Index--;
            this.PlayIndex(this.playData.Index);
        }
        break;
      case 1:
        this.playData.Index = (this.playData.Index - 1) < 0 ?
            (this.playList.length - 1) :
            (this.playData.Index - 1);
        this.PlayIndex(this.playData.Index);
        break;
      case 2:
        this.playData.Index = (this.playData.Index - 1) < 0 ?
        (this.playList.length - 1) :
        (this.playData.Index - 1);
        this.PlayIndex(this.playData.Index);
        break;
      case 3:
        this._audio.currentTime = 0;
        break;
      default:
      if (this.playData.Index > 0) {
            this.playData.Index--;
            this.PlayIndex(this.playData.Index);
        }
        break;
    }
  }  

  public Skip(percent:number):void {
    if(this._audio.duration){
      this._audio.currentTime =this._audio.duration*percent;
      this.playData.Current = this._audio.currentTime;
      this.playData.percent = percent*100 + '%';
    }
    
  };

  public PlayList() {
    return this.playList;
  };

  public PlayData() {
    return this.playData;
  };

  public FillPlayData(): void {
    this.playData.Current = this._audio.duration;
    this.playData.percent = 100 + '%';
    this.playData.Data = this._audio.duration;
  }
  private PlayIndex(index: number): void {
    index = this.playList[index] ? index :
      this.playList[index + 1] ? (index + 1) : this.playList[index - 1] ? (index - 1) : -1;
    if (index !== -1) {
      this._audio.src = this.playList[index].src;
      if (this._audio.paused) {
        this._audio.play();
        this.playData.IsPlaying = true;
      }
      this.playData.Index = index;
      this.playData.MicName = this.playList[this.playData.Index].name;        
      this.playData.artist = this.playList[this.playData.Index].artists[0].name;        
      
      this.playdata.next(this.playData);
    } else {
      console.log('nothing to be play');
    }
  }

  // change(test){
  //   this.tests.next(test);
  // }
}

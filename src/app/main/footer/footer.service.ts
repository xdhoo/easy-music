import { Injectable } from '@angular/core';
import { MusicData, PlayData } from '../main-model';

@Injectable()
export class FooterService {
  private _audio: HTMLAudioElement;

  private playData:PlayData = {
    Index:0,
    IsPlaying:false,
    MicName:'',
    Style:1,
    Current:0,
    Data:0,
  }
  private playList:MusicData[] = [];
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

  public Toogle(audio?:MusicData):void{
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

  public Add(audio:MusicData):void{
    this.playList.push(audio);
    if(this.playList.length === 1){
      this.PlayIndex(0);
      this.playData.MicName = audio.micName;
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

  public PlayList():MusicData[] {
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
    } else {
      console.log('nothing to be play');
    }
  }
}
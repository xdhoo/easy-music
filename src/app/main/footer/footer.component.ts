import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  private _audio: HTMLAudioElement;
  //a = document.getElementById("audio");
  constructor() {
    this._audio = document.createElement('audio');
    this._audio.src="http://112.17.14.28/cache/qqma.tingge123.com:83/20081123/%E7%94%9C%E8%9C%9C%E8%9C%9C.mp3?ich_args2=381-14180512040764_e4dfdf18929b97484d00d66de86aa399_10001002_9c89662dd7c1f0d8933a518939a83798_5060881fa5fe5a9dcc1db3c33956c5fb";
   }

  ngOnInit() {
  }

  onplay(){
    this._audio.play();
  }

}

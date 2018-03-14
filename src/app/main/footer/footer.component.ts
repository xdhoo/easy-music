import { Component, OnInit } from '@angular/core';
import { FooterService } from './footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers:[FooterService]
})
export class FooterComponent implements OnInit {

  constructor(public audio:FooterService) {
  }

  ngOnInit() {
  }

  onplay(){
    this.audio.Toogle();
    if(this.audio.PlayData().IsPlaying){
      
    }
    this.audio.Add({id:2,
      micName:'Chill Bill',
      singer:'the ShowBoys',
      src:'assets/audio/1.mp3',
      album:'Chill Bill',
      time:'04:22'})
    //this._audio.play();
  }

}

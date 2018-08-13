import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-station',
  templateUrl: './radio-station.component.html',
  styleUrls: ['./radio-station.component.css']
})
export class RadioStationComponent implements OnInit {

  listData= [];
  bestData= [];
  hotData= [];
  constructor() { }

  ngOnInit() {
  }

}

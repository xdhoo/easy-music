import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../service/get-data.service';

@Component({
  selector: 'app-singer',
  templateUrl: './singer.component.html',
  styleUrls: ['./singer.component.css']
})
export class SingerComponent implements OnInit {
  snlists;
  constructor(private getSings:GetDataService) { }

  ngOnInit() {
    this.getSings.getSingerlists()
      .then(res => {this.snlists = res})
  }

}

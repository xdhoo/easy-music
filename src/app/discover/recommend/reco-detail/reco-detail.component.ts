import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-reco-detail',
  templateUrl: './reco-detail.component.html',
  styleUrls: ['./reco-detail.component.css']
})
export class RecoDetailComponent implements OnInit {

  listId: string;

  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.listId = data.id;
    });


  }

}

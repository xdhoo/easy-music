import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { GetDataService } from '../../service/get-data.service';


@Component({
  selector: 'app-m-list',
  templateUrl: './m-list.component.html',
  styleUrls: ['./m-list.component.css'],
  providers:[GetDataService]
})
export class MListComponent implements OnInit {

  listId;
  listData = { };
  constructor(private route:ActivatedRoute,private getdata:GetDataService) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.listId = data.id;
    });

    this.getdata.getPlayList(this.listId)
    .then(res => {
      this.listData = res.result;
    })
    .catch()
  }

}

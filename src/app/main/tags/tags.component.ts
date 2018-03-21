import { Component, OnInit, Input } from '@angular/core';
import { TagData } from '../main-model';

@Component({
  selector: 'app-tags',
  template: `
  <div class="c-tags">
    <dl>
      <dt>{{data.title}}：</dt>
      <dd>
        <ng-template ngFor let-item [ngForOf]="data.tags">
          <a>{{item.tagName}}</a>
          <span>|</span>
        </ng-template>        
      </dd>
    </dl>
  </div>
  `
})
export class TagsComponent implements OnInit {

  @Input() data:Array<TagData>;

  constructor() { }

  ngOnInit() {
  }

}

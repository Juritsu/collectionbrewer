import {Component, Input, OnInit} from '@angular/core';

import {Collection} from '../collection.model';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class CollectionDetailComponent implements OnInit {
  @Input() collection: Collection;
  constructor() { }

  ngOnInit() {
  }

}

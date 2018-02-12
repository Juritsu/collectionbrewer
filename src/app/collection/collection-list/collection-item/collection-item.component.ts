import {Component, HostListener, Input, OnInit} from '@angular/core';

import {Collection} from '../../collection.model';
import {CollectionService} from '../../collection.service';

@Component({
  selector: 'app-collection-item',
  templateUrl: './collection-item.component.html',
  styleUrls: ['./collection-item.component.scss'],
})
export class CollectionItemComponent implements OnInit {
  @Input() collection: Collection;
  @HostListener('click') onSelected() {
    this.collectionService.collectionSelected.emit(this.collection)
  }

  constructor(private collectionService: CollectionService) { }

  ngOnInit() {
  }
}

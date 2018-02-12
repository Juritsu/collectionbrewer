import { Component, OnInit } from '@angular/core';
import { Collection } from './collection.model';
import { CollectionService } from './collection.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
  providers: [CollectionService]
})
export class CollectionComponent implements OnInit {
  selectedCollection: Collection;

  constructor(private collectionService: CollectionService) {}

  ngOnInit() {
    this.collectionService.collectionSelected
      .subscribe(
        (collection: Collection) => {
          this.selectedCollection = collection
        }
      );
  }
};

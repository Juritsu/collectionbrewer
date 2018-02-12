import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import { CollectionService } from '../collection.service';
import { Collection } from '../collection.model';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.scss']
})

export class CollectionListComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('descInput') descInputRef: ElementRef;
  @ViewChild('itemInput') itemInputRef: ElementRef;

  collections: Collection[];
  constructor(private collectionService: CollectionService) { }

  ngOnInit() {
    this.collections = this.collectionService.getCollections();
    this.collectionService.collectionsChanged
      .subscribe(
        (collections: Collection[]) => {
          this.collections = collections;
        }
      );
  }

  onAddCollection() {
    const collectionName = this.nameInputRef.nativeElement.value;
    const collectionDesc = this.descInputRef.nativeElement.value;
    const collectionItems = this.itemInputRef.nativeElement.value;
    const newCollection = new Collection(collectionName, collectionDesc, collectionItems)

    this.collectionService.addCollection(newCollection);
  }
}

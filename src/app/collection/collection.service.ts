import {EventEmitter} from '@angular/core';

import {Collection} from './collection.model';
import {Item} from '../shared/item.model';

export class CollectionService {
  collectionSelected = new EventEmitter<Collection>();
  collectionsChanged = new EventEmitter<Collection[]>();

  private collections: Collection[] = [
    new Collection(
      'Beer recipes',
      'A collection of beer recipes',
      [
          new Item('Weizen', 12),
          new Item('Stout', 12)
      ]),
    new Collection(
      'Magic Cards',
      'A collection of magic cards',
      [
          new Item('The magic cards in this collection', 12)
      ])
  ];

  getCollections() {
    return this.collections.slice();
  }

  addCollection(collection: Collection) {
    this.collections.push(collection);
    this.collectionsChanged.emit(this.collections.slice());
  }
}

import {Item} from '../shared/item.model';

export class Collection {
  public name: string;
  public description: string;
  public items: Item[];

  constructor(name: string, desc: string, items: Item[]) {
    this.name = name;
    this.description = desc;
    this.items = items;
  }
}

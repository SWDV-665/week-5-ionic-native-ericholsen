/**
 * This service is for the data of the Groceries app
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroceriesServiceService {

  items = [];

  constructor() { }

  getItems() {
    return this.items;
  }

  removeItem(index) {
    this.items.splice(index, 1);
  }

  editItem(item, index) {
    this.items[index].name = item.name;
    this.items[index].quantity = item.quantity;
  }

  addItem(item){
    this.items.push(item);
  }

}

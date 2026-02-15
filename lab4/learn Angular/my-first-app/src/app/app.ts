// When working with components it may be required to notify other 
// components that something has happened. 
// Perhaps a button has been clicked, an item has been added/removed 
// from a list or some other important update has occurred. 
// In this scenario components need to communicate with parent components.
import { Component } from '@angular/core';
import { Child } from './child';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Child],
  template: `
    <app-child (addItemEvent)="addItem($event)" />
    <ul>
      @for (item of items; track item) {
        <li>{{ item }}</li>
      }
    </ul>
  `,
})
export class App {
  items = ['🍎', '🍌', '🍒'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
}
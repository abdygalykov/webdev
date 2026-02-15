import {Component} from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
  <nav>
      <a routerLink="/">Home</a> | 
      <a routerLink="/user">User</a>
    </nav>

  <hr />
  <a routerLink="/">Home</a>
  <a routerLink="/user">User</a>
  `,
  imports: [RouterOutlet, RouterLink]
})
export class App {
}
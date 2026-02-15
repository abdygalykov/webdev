/*Angular — это SPA (Single Page Application — одностраничное приложение),
где физически существует только один файл index.html
роутинг позволяет менять содержимое экрана и URL в 
адресной строке так, будто ты переходишь по разным страницам. */

import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
  <nav>
      <a href="/">Home</a>
      |
      <a href="/user">User</a>
    </nav>
    <router-outlet />
  `,
  imports: [RouterOutlet]
})
export class App {
}
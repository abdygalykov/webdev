//In this activity, you'll learn how to add an event handler.
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <section (mouseover)="showSecretMessage()">
    {{message}}
  </section>
  `,
})
export class App {
  message ='';

  showSecretMessage(){
    this.message = 'Way to go';
  }
}

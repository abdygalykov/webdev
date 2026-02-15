// In this activity, you'll learn how to use the input() function to send information to components.
import { Component } from '@angular/core';
import { User } from "./user";

@Component({
  selector: 'app-root',
  standalone: true, // Добавь это
  imports: [User],  // Добавляем User сюда
  template: `
    <h1>Welcome to Angular</h1>
    <app-user occupation="Angular development"></app-user>
  `,
})
export class App {
}
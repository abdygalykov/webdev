import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Он ищет файл, который мы создали выше

bootstrapApplication(AppComponent)
  .catch((err) => console.error(err));
import { Routes } from '@angular/router';
import { User } from './user'; // твой компонент

export const routes: Routes = [
  { path: 'user', component: User },
  // { path: '', component: HomeComponent }, // если есть главная
];
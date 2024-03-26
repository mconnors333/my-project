import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { name: 'Matt' },
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { name: 'Matt' },
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { name: 'Matt' },
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { name: 'Matt' },
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: { name: 'Matt' },
  },
];

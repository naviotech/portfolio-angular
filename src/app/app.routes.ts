import { Routes } from '@angular/router';
import AboutPageComponent from './modules/pages/about/about.component';

export const routes: Routes = [
  {
    path: '',
    component: AboutPageComponent,
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./modules/pages/contact/contact-page.component'),
  },
  {
    path: 'education',
    loadComponent: () =>
      import('./modules/pages/education/education-page.component'),
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./modules/pages/projects/projects-page.component'),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

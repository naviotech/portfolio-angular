import { Routes } from '@angular/router';
import AboutPageComponent from './modules/pages/about/about.component';

export const routes: Routes = [
  {
    path: '',
    component: AboutPageComponent,
  },
  {
    path: 'experience',
    loadComponent: () =>
      import('./modules/pages/experience/experience-page.component'),
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

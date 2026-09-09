import { Routes } from '@angular/router';

export default [
  { path: '', loadComponent: () => import('./feature/settings').then(m => m.Settings) },
] as Routes;

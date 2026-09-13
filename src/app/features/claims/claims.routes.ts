import { Routes } from '@angular/router';

export default [
  { path: '', loadComponent: () => import('./feature/claims-list/claims-list').then(m => m.ClaimsList) },
  { path: 'new', loadComponent: () => import('./feature/claims-form/claims-form').then(m => m.ClaimsForm) },
  { path: ':id', loadComponent: () => import('./feature/claims-details/claims-details').then(m => m.ClaimsDetails) },
  { path: ':id/edit', loadComponent: () => import('./feature/claims-form/claims-form').then(m => m.ClaimsForm) },
] as Routes;

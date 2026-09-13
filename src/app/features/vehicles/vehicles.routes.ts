import { Routes } from '@angular/router';

export default [
  { path: '', loadComponent: () => import('./feature/vehicles-list/vehicles-list').then(m => m.VehiclesList) },
  { path: 'new', loadComponent: () => import('./feature/vehicles-form/vehicles-form').then(m => m.VehiclesForm) },
  { path: ':id', loadComponent: () => import('./feature/vehicles-details/vehicles-details').then(m => m.VehiclesDetails) },
  { path: ':id/edit', loadComponent: () => import('./feature/vehicles-form/vehicles-form').then(m => m.VehiclesForm) },
] as Routes;

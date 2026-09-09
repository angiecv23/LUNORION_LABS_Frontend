import { Routes } from '@angular/router';

export default [
  { path: '', loadComponent: () => import('./feature/appointments-list/appointments-list').then(m => m.AppointmentsList) },
  { path: 'new', loadComponent: () => import('./feature/appointments-form/appointments-form').then(m => m.AppointmentsForm) },
  { path: ':id', loadComponent: () => import('./feature/appointments-details/appointments-details').then(m => m.AppointmentsDetails) },
  { path: ':id/edit', loadComponent: () => import('./feature/appointments-form/appointments-form').then(m => m.AppointmentsForm) },
] as Routes;

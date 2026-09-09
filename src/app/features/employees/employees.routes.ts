import { Routes } from '@angular/router';

export default [
  { path: '', loadComponent: () => import('./feature/employees-list/employees-list').then(m => m.EmployeesList) },
  { path: 'new', loadComponent: () => import('./feature/employees-form/employees-form').then(m => m.EmployeesForm) },
  { path: ':id', loadComponent: () => import('./feature/employees-details/employees-details').then(m => m.EmployeesDetails) },
  { path: ':id/edit', loadComponent: () => import('./feature/employees-form/employees-form').then(m => m.EmployeesForm) },
] as Routes;

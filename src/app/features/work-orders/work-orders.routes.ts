import { Routes } from '@angular/router';

export default [
  { path: '', loadComponent: () => import('./feature/work-orders-list/work-orders-list').then(m => m.WorkOrdersList) },
  { path: 'new', loadComponent: () => import('./feature/work-orders-form/work-orders-form').then(m => m.WorkOrdersForm) },
  { path: ':id', loadComponent: () => import('./feature/work-orders-details/work-orders-details').then(m => m.WorkOrdersDetails) },
  { path: ':id/edit', loadComponent: () => import('./feature/work-orders-form/work-orders-form').then(m => m.WorkOrdersForm) },
] as Routes;

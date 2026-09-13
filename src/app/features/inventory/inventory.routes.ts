import { Routes } from '@angular/router';

export default [
  { path: '', loadComponent: () => import('./feature/inventory-list/inventory-list').then(m => m.InventoryList) },
  { path: 'new', loadComponent: () => import('./feature/inventory-form/inventory-form').then(m => m.InventoryForm) },
  { path: ':id', loadComponent: () => import('./feature/inventory-details/inventory-details').then(m => m.InventoryDetails) },
  { path: ':id/edit', loadComponent: () => import('./feature/inventory-form/inventory-form').then(m => m.InventoryForm) },
] as Routes;

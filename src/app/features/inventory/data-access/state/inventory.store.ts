import { Injectable, signal } from '@angular/core';
import { InventoryItem } from '../../domain/models/inventory-item';

@Injectable({ providedIn: 'root' })
export class InventoryStore {
  readonly items = signal<InventoryItem[]>([]);
  readonly selectedItem = signal<InventoryItem | null>(null);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

  setItems(items: InventoryItem[]): void {
    this.items.set(items);
  }

  setSelectedItem(item: InventoryItem | null): void {
    this.selectedItem.set(item);
  }

  setLoading(value: boolean): void {
    this.loading.set(value);
  }

  setError(error: string | null): void {
    this.error.set(error);
  }
}

import { Observable } from 'rxjs';
import { InventoryItem } from '../models/inventory-item';

export abstract class InventoryRepository {
  abstract getAll(): Observable<InventoryItem[]>;
  abstract getById(id: string): Observable<InventoryItem>;
  abstract create(item: Omit<InventoryItem, 'id'>): Observable<InventoryItem>;
  abstract update(id: string, item: Partial<InventoryItem>): Observable<InventoryItem>;
  abstract delete(id: string): Observable<void>;
}

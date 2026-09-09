import { Injectable, signal } from '@angular/core';
import { WorkOrder } from '../../domain/models/work-order';

@Injectable({ providedIn: 'root' })
export class WorkOrderStore {
  readonly workOrders = signal<WorkOrder[]>([]);
  readonly selectedWorkOrder = signal<WorkOrder | null>(null);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

  setWorkOrders(workOrders: WorkOrder[]): void {
    this.workOrders.set(workOrders);
  }

  setSelectedWorkOrder(workOrder: WorkOrder | null): void {
    this.selectedWorkOrder.set(workOrder);
  }

  setLoading(value: boolean): void {
    this.loading.set(value);
  }

  setError(error: string | null): void {
    this.error.set(error);
  }
}

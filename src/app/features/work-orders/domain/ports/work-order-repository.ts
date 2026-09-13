import { Observable } from 'rxjs';
import { WorkOrder } from '../models/work-order';

export abstract class WorkOrderRepository {
  abstract getAll(): Observable<WorkOrder[]>;
  abstract getById(id: string): Observable<WorkOrder>;
  abstract create(workOrder: Omit<WorkOrder, 'id'>): Observable<WorkOrder>;
  abstract update(id: string, workOrder: Partial<WorkOrder>): Observable<WorkOrder>;
  abstract delete(id: string): Observable<void>;
}

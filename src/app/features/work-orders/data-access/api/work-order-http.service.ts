import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { WorkOrderRepository } from '../../domain/ports/work-order-repository';
import { WorkOrder } from '../../domain/models/work-order';

@Injectable()
export class WorkOrderHttpService implements WorkOrderRepository {
  private readonly apiUrl = `${environment.apiUrl}/work-orders`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<WorkOrder[]> {
    return this.http.get<WorkOrder[]>(this.apiUrl);
  }

  getById(id: string): Observable<WorkOrder> {
    return this.http.get<WorkOrder>(`${this.apiUrl}/${id}`);
  }

  create(workOrder: Omit<WorkOrder, 'id'>): Observable<WorkOrder> {
    return this.http.post<WorkOrder>(this.apiUrl, workOrder);
  }

  update(id: string, workOrder: Partial<WorkOrder>): Observable<WorkOrder> {
    return this.http.put<WorkOrder>(`${this.apiUrl}/${id}`, workOrder);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

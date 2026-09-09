import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

export abstract class EmployeeRepository {
  abstract getAll(): Observable<Employee[]>;
  abstract getById(id: string): Observable<Employee>;
  abstract create(employee: Omit<Employee, 'id'>): Observable<Employee>;
  abstract update(id: string, employee: Partial<Employee>): Observable<Employee>;
  abstract delete(id: string): Observable<void>;
}

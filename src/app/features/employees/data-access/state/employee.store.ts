import { Injectable, signal } from '@angular/core';
import { Employee } from '../../domain/models/employee';

@Injectable({ providedIn: 'root' })
export class EmployeeStore {
  readonly employees = signal<Employee[]>([]);
  readonly selectedEmployee = signal<Employee | null>(null);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

  setEmployees(employees: Employee[]): void {
    this.employees.set(employees);
  }

  setSelectedEmployee(employee: Employee | null): void {
    this.selectedEmployee.set(employee);
  }

  setLoading(value: boolean): void {
    this.loading.set(value);
  }

  setError(error: string | null): void {
    this.error.set(error);
  }
}

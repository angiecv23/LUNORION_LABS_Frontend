import { Observable } from 'rxjs';
import { Appointment } from '../models/appointment';

export abstract class AppointmentRepository {
  abstract getAll(): Observable<Appointment[]>;
  abstract getById(id: string): Observable<Appointment>;
  abstract create(appointment: Omit<Appointment, 'id'>): Observable<Appointment>;
  abstract update(id: string, appointment: Partial<Appointment>): Observable<Appointment>;
  abstract delete(id: string): Observable<void>;
}

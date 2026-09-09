import { Observable } from 'rxjs';
import { Vehicle } from '../models/vehicle';

export abstract class VehicleRepository {
  abstract getAll(): Observable<Vehicle[]>;
  abstract getById(id: string): Observable<Vehicle>;
  abstract create(vehicle: Omit<Vehicle, 'id'>): Observable<Vehicle>;
  abstract update(id: string, vehicle: Partial<Vehicle>): Observable<Vehicle>;
  abstract delete(id: string): Observable<void>;
}

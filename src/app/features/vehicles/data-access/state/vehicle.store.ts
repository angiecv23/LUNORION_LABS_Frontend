import { Injectable, signal } from '@angular/core';
import { Vehicle } from '../../domain/models/vehicle';

@Injectable({ providedIn: 'root' })
export class VehicleStore {
  readonly vehicles = signal<Vehicle[]>([]);
  readonly selectedVehicle = signal<Vehicle | null>(null);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

  setVehicles(vehicles: Vehicle[]): void {
    this.vehicles.set(vehicles);
  }

  setSelectedVehicle(vehicle: Vehicle | null): void {
    this.selectedVehicle.set(vehicle);
  }

  setLoading(value: boolean): void {
    this.loading.set(value);
  }

  setError(error: string | null): void {
    this.error.set(error);
  }
}

import { Injectable, signal } from '@angular/core';
import { Appointment } from '../../domain/models/appointment';

@Injectable({ providedIn: 'root' })
export class AppointmentStore {
  readonly appointments = signal<Appointment[]>([]);
  readonly selectedAppointment = signal<Appointment | null>(null);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

  setAppointments(appointments: Appointment[]): void {
    this.appointments.set(appointments);
  }

  setSelectedAppointment(appointment: Appointment | null): void {
    this.selectedAppointment.set(appointment);
  }

  setLoading(value: boolean): void {
    this.loading.set(value);
  }

  setError(error: string | null): void {
    this.error.set(error);
  }
}

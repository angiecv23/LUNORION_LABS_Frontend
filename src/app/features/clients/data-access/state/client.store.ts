import { Injectable, signal } from '@angular/core';
import { Client } from '../../domain/models/client';

@Injectable({ providedIn: 'root' })
export class ClientStore {
  readonly clients = signal<Client[]>([]);
  readonly selectedClient = signal<Client | null>(null);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

  setClients(clients: Client[]): void {
    this.clients.set(clients);
  }

  setSelectedClient(client: Client | null): void {
    this.selectedClient.set(client);
  }

  setLoading(value: boolean): void {
    this.loading.set(value);
  }

  setError(error: string | null): void {
    this.error.set(error);
  }
}

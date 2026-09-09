import { Observable } from 'rxjs';
import { Client } from '../models/client';

export abstract class ClientRepository {
  abstract getAll(): Observable<Client[]>;
  abstract getById(id: string): Observable<Client>;
  abstract create(client: Omit<Client, 'id'>): Observable<Client>;
  abstract update(id: string, client: Partial<Client>): Observable<Client>;
  abstract delete(id: string): Observable<void>;
}

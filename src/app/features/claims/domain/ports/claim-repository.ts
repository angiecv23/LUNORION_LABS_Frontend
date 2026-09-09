import { Observable } from 'rxjs';
import { Claim } from '../models/claim';

export abstract class ClaimRepository {
  abstract getAll(): Observable<Claim[]>;
  abstract getById(id: string): Observable<Claim>;
  abstract create(claim: Omit<Claim, 'id'>): Observable<Claim>;
  abstract update(id: string, claim: Partial<Claim>): Observable<Claim>;
  abstract delete(id: string): Observable<void>;
}

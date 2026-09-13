import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { ClaimRepository } from '../../domain/ports/claim-repository';
import { Claim } from '../../domain/models/claim';

@Injectable()
export class ClaimHttpService implements ClaimRepository {
  private readonly apiUrl = `${environment.apiUrl}/claims`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Claim[]> {
    return this.http.get<Claim[]>(this.apiUrl);
  }

  getById(id: string): Observable<Claim> {
    return this.http.get<Claim>(`${this.apiUrl}/${id}`);
  }

  create(claim: Omit<Claim, 'id'>): Observable<Claim> {
    return this.http.post<Claim>(this.apiUrl, claim);
  }

  update(id: string, claim: Partial<Claim>): Observable<Claim> {
    return this.http.put<Claim>(`${this.apiUrl}/${id}`, claim);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

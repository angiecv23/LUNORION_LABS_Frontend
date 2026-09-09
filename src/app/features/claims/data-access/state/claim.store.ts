import { Injectable, signal } from '@angular/core';
import { Claim } from '../../domain/models/claim';

@Injectable({ providedIn: 'root' })
export class ClaimStore {
  readonly claims = signal<Claim[]>([]);
  readonly selectedClaim = signal<Claim | null>(null);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

  setClaims(claims: Claim[]): void {
    this.claims.set(claims);
  }

  setSelectedClaim(claim: Claim | null): void {
    this.selectedClaim.set(claim);
  }

  setLoading(value: boolean): void {
    this.loading.set(value);
  }

  setError(error: string | null): void {
    this.error.set(error);
  }
}

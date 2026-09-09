import { Injectable, computed, inject } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class LayoutService {
  private readonly authService = inject(AuthService);

  readonly userName = computed(() => this.authService.user()?.nombres ?? 'Usuario');
  readonly userRole = computed(() => this.authService.user()?.rol ?? '');
  readonly permissions = computed(() => this.authService.permissions());

  logout(): void {
    this.authService.logout();
  }
}

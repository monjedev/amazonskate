import { computed, effect, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { Role } from '../models/auth-model';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private platformId = inject(PLATFORM_ID);

  private currentRoleSignal = signal<Role | null>(null);

  isAuthenticated = computed(() => this.currentRoleSignal() !== null);

  constructor() {
        // Solo ejecutar en el navegador

    if (isPlatformBrowser(this.platformId)) {
      const stored = localStorage.getItem('amazonia-role');

      if (stored) {
        try {
          const role = JSON.parse(stored) as Role;
          this.currentRoleSignal.set(role);
        } catch {
          localStorage.removeItem('amazonia-role');
        }
      }
    }
        // Efecto para persistencia en localStorage (solo en navegador)

    effect(() => {
      if (isPlatformBrowser(this.platformId)) {
        const role = this.currentRoleSignal();
        if (role) {
          localStorage.setItem('amazonia-role', JSON.stringify(role));
        } else {
          localStorage.removeItem('amazonia-role');
        }
      }
    });
  }

  get currentRole() {
    return this.currentRoleSignal.asReadonly();
  }

  login(role: Role): void {
    this.currentRoleSignal.set(role);
  }

  logout(): void {
    this.currentRoleSignal.set(null);
  }
}

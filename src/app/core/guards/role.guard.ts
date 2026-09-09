import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const roleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const requiredRoleLabel = route.data['role'] as string;
  const currentRole = authService.currentRole();

  if (!authService.isAuthenticated()) {
    router.navigate(['/login']);
    return false;
  }

  if (!requiredRoleLabel) {
    return true;
  }

  if (currentRole?.label === requiredRoleLabel) {
    return true;
  }

  router.navigate(['/login']);
  return false;
};

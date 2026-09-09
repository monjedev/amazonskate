import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { BRAND, NAV_LINKS } from '../../../core/mocks/navigation-mock';
import { Button } from '../../atoms/button/button';
import { AuthService } from '../../../core/services/auth.service';
import { Drawer } from "../../advanced-molecules/drawer/drawer";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [Button, RouterLink, RouterLinkActive, Drawer],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBar {
  private authService = inject(AuthService);
  router = inject(Router);

  brand = BRAND;
  navLinks = NAV_LINKS;
  isDrawerOpen = signal(false);

  // Computed para saber si está autenticado
  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  // Obtener el rol actual (readonly)
  currentRole() {
    return this.authService.currentRole();
  }

  toggleDrawer() {
    this.isDrawerOpen.update((val) => !val);
  }

  closeDrawer() {
    this.isDrawerOpen.set(false);
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
    this.closeDrawer(); // Cierra el drawer en móvil
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}

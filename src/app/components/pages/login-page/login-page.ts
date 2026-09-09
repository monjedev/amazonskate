import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { LoginForm } from '../../../components/organisms/login-form/login-form';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { Role } from '../../../core/models/auth-model';
import { Toast } from "../../advanced-molecules/toast/toast";

@Component({
  selector: 'app-login-page',
  imports: [LoginForm, Toast],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPage {

  private authService = inject(AuthService);
  router = inject(Router);

  toastMessage = signal('');
  toastType = signal<'success' | 'error'>('success');

  onLogin(role: Role): void {
    this.authService.login(role);

    this.toastMessage.set(`¡Bienvenido, ${role.label}!`);
    this.toastType.set('success');
    setTimeout(() => this.toastMessage.set(''), 2000);

    const dashboardMap: Record<string, string> = {
      'Admin Plataforma': '/dashboard/admin',
      'Admin Club': '/dashboard/club',
      'Entrenador': '/dashboard/coach',
      'Atleta': '/dashboard/atleta',
    };
    const target = dashboardMap[role.label] || '/';

    // Navegamos después de mostrar el toast
    setTimeout(() => this.router.navigate([target]), 3000);
  }
}

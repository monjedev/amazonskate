import { ChangeDetectionStrategy, Component, inject, output, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Button } from '../../atoms/button/button';
import { InputField } from '../../atoms/input-field/input-field';
import { ROLES } from '../../../core/mocks/auth-mock';
import { Role } from '../../../core/models/auth-model';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, InputField, Button],
  templateUrl: './login-form.html',
  styleUrl: './login-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginForm {
  // Roles disponibles (mock)
  roles: Role[] = ROLES;

  // Estado de carga para el botón de submit
  isLoading = signal(false);

  // Output que emite el rol seleccionado (para navegación directa)
  loginRole = output<Role>();

  // Formulario de login (email + password) – se mantiene para uso futuro
  private fb = new FormBuilder();
  form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  /**
   * Maneja el envío del formulario (demo: solo simula carga)
   * En un entorno real, aquí se llamaría al AuthService con email/password.
   */
  onSubmit() {
    if (this.form.valid) {
      this.isLoading.set(true);
      // Simulación de login (en demo, esto no se usa realmente)
      setTimeout(() => this.isLoading.set(false), 1500);
    }
  }

  /**
   * Acción al hacer clic en un rol (demo).
   * Emite el rol seleccionado para que LoginPage navegue al dashboard.
   */
  onRoleSelect(role: Role): void {
    this.loginRole.emit(role);
    
  }
}

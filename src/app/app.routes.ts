import { Routes } from '@angular/router';
import { LoginPage } from './components/pages/login-page/login-page';
import { AdminDashboard } from './components/pages/admin-dashboard/admin-dashboard';
import { AthleteDashboard } from './components/pages/athlete-dashboard/athlete-dashboard';
import { AthletesPage } from './components/pages/athletes-page/athletes-page';
import { ClubsPage } from './components/pages/clubs-page/clubs-page';
import { CoachDashboard } from './components/pages/coach-dashboard/coach-dashboard';
import { ContactPage } from './components/pages/contact-page/contact-page';
import { EventsPage } from './components/pages/events-page/events-page';
import { LandingPage } from './components/pages/landing-page/landing-page';
import { ManagerDashboard } from './components/pages/manager-dashboard/manager-dashboard';
import { ShopPage } from './components/pages/shop-page/shop-page';
import { Playground } from './components/playground/playground';
import { roleGuard } from './core/guards/role.guard';
import { LayoutComponent } from './layouts/layout-component/layout-component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: LandingPage },
      { path: 'tienda', component: ShopPage },
      { path: 'atletas', component: AthletesPage },
      { path: 'eventos', component: EventsPage },
      { path: 'clubes', component: ClubsPage },
      { path: 'contacto', component: ContactPage },
      { path: 'playground', component: Playground },
      // Rutas protegidas
      {
        path: 'dashboard/atleta',
        component: AthleteDashboard,
        canActivate: [roleGuard],
        data: { role: 'Atleta' },
      },
      {
        path: 'dashboard/coach',
        component: CoachDashboard,
        canActivate: [roleGuard],
        data: { role: 'Entrenador' },
      },
      {
        path: 'dashboard/club',
        component: ManagerDashboard,
        canActivate: [roleGuard],
        data: { role: 'Admin Club' },
      },
      {
        path: 'dashboard/admin',
        component: AdminDashboard,
        canActivate: [roleGuard],
        data: { role: 'Admin Plataforma' },
      },
    ],
  },
  // Ruta de login fuera del Layout (sin navbar/footer)
  { path: 'login', component: LoginPage },
  // Redirección para rutas no encontradas
  { path: '**', redirectTo: '' },
];

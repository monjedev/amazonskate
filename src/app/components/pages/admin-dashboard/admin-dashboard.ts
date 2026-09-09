import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ADMIN_KPIS, ADMIN_TABS } from '../../../core/mocks/dashboard-mock';
import { StatCard } from "../../molecules/stat-card/stat-card";
import { Tabs } from "../../molecules/tabs/tabs";

@Component({
  selector: 'app-admin-dashboard',
  standalone:true,
  imports: [StatCard, Tabs],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminDashboard {
  kpis = ADMIN_KPIS;
  tabs = ADMIN_TABS;
  activeTab = signal('Clubes');
}

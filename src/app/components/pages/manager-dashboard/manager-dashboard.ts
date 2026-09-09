import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CLUB_ATHLETES, MANAGER_KPIS, MANAGER_TABS } from '../../../core/mocks/dashboard-mock';
import { StatCard } from "../../molecules/stat-card/stat-card";
import { Tabs } from "../../molecules/tabs/tabs";
import { DataTable } from "../../organisms/data-table/data-table";

@Component({
  selector: 'app-manager-dashboard',
  standalone: true,
  imports: [Tabs, StatCard, DataTable],
  templateUrl: './manager-dashboard.html',
  styleUrl: './manager-dashboard.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManagerDashboard {
  kpis = MANAGER_KPIS;
  athletes = CLUB_ATHLETES;
  tabs = MANAGER_TABS;
  columns = [
    { key: 'name', header: 'Nombre' },
    { key: 'category', header: 'Categoría' },
  ];
  activeTab = signal('Atletas');
}

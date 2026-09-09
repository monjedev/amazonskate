import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CLUB_ATHLETES, MANAGER_HEADER, MANAGER_KPIS, MANAGER_TABS } from '../../../core/mocks/dashboard-mock';
import { StatCard } from '../../molecules/stat-card/stat-card';
import { DataTable } from '../../organisms/data-table/data-table';

@Component({
  selector: 'app-club-dashboard',
  standalone: true,
  imports: [ StatCard, DataTable],
  templateUrl: './club-dashboard.html',
  styleUrl: './club-dashboard.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClubDashboard {
  header = MANAGER_HEADER;
  kpis = MANAGER_KPIS;
  tabs = MANAGER_TABS;
  athletes = CLUB_ATHLETES;
  columns = [
    { key: 'name', header: 'Nombre' },
    { key: 'category', header: 'Categoría' },
    { key: 'status', header: 'Estado' },
  ];

  activeTab = signal('Atletas');

  setTab(tab: string) {
    this.activeTab.set(tab);
  }
}

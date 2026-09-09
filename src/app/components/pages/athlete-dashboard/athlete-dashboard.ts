import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ATHLETE_ACHIEVEMENTS, ATHLETE_KPIS, ATHLETE_SESSIONS } from '../../../core/mocks/dashboard-mock';
import { StatCard } from '../../molecules/stat-card/stat-card';

@Component({
  selector: 'app-athlete-dashboard',
  standalone: true,
  imports: [ StatCard],
  templateUrl: './athlete-dashboard.html',
  styleUrl: './athlete-dashboard.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AthleteDashboard {
  kpis = ATHLETE_KPIS;
  sessions = ATHLETE_SESSIONS;
  achievements = ATHLETE_ACHIEVEMENTS;
}

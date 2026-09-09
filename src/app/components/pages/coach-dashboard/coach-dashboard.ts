import { ChangeDetectionStrategy, Component } from '@angular/core';
import { COACH_KPIS, COACH_SCHEDULE, GROUP_OBJECTIVES } from '../../../core/mocks/dashboard-mock';
import { StatCard } from "../../molecules/stat-card/stat-card";

@Component({
  selector: 'app-coach-dashboard',
  standalone: true,
  imports: [ StatCard ],
  templateUrl: './coach-dashboard.html',
  styleUrl: './coach-dashboard.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoachDashboard {
  kpis = COACH_KPIS;
  schedule = COACH_SCHEDULE;
  objectives = GROUP_OBJECTIVES;
}

import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ProgressBar } from "../../advanced-atoms/progress-bar/progress-bar";
import { KpiCard } from '../../../core/models/dashboard-model';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  imports: [ProgressBar],
  templateUrl: './stat-card.html',
  styleUrl: './stat-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatCard {
  kpi = input.required<KpiCard>();
}

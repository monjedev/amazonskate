import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { CLUB_ATHLETES } from '../../../core/mocks/dashboard-mock';
import { AthleteSummary } from '../../../core/models/dashboard-model';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [],
  templateUrl: './data-table.html',
  styleUrl: './data-table.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataTable {
  // Inputs para permitir pasar columnas y datos, con fallback a los mocks
  columns = input.required<{ key: string; header: string }[]>();
  data = input<any[]>();

  rowAction = output<any>();

  onAction(row: any) {
    this.rowAction.emit(row);
  }
}

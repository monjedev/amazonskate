import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Button } from '../../atoms/button/button';

@Component({
  selector: 'app-events-page',
  standalone: true,
  imports: [ Button],
  templateUrl: './events-page.html',
  styleUrl: './events-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsPage {
  events = signal([
    {
      id: 1,
      title: 'Gran Torneo de la Selva Amazónica',
      date: '15-17 Marzo, 2024',
      location: 'Ciudad de México',
      status: 'Convocatoria Abierta',
    },
    {
      id: 2,
      title: 'Festival de las Ruedas Danzantes',
      date: '28 Abril, 2024',
      location: 'Guadalajara',
      status: 'Próximamente',
    },
    {
      id: 3,
      title: 'Liga de Casco de los Héroes',
      date: '12 Mayo, 2024',
      location: 'Monterrey',
      status: 'Próximamente',
    },
  ]);
}

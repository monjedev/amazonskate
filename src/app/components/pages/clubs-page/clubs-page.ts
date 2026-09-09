import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CLUBS } from '../../../core/mocks/clubs-mock';
import { ClubCard } from "../../molecules/club-card/club-card";

@Component({
  selector: 'app-clubs-page',
  standalone: true,
  imports: [ ClubCard],
  templateUrl: './clubs-page.html',
  styleUrl: './clubs-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClubsPage {
  clubs = CLUBS;
}

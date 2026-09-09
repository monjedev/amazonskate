import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ATHLETES } from '../../../core/mocks/athletes-mock';
import { UserCard } from '../../molecules/user-card/user-card';
import { Athlete } from '../../../core/models/athletes-model';
import { Modal } from "../../advanced-molecules/modal/modal";
import { Button } from "../../atoms/button/button";

@Component({
  selector: 'app-athletes-page',
  standalone: true,
  imports: [UserCard, Modal, Button],
  templateUrl: './athletes-page.html',
  styleUrl: './athletes-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AthletesPage {
  champions = ATHLETES.filter((a) => a.rank && a.rank <= 3);
  explorers = ATHLETES.filter((a) => !a.rank || a.rank > 3);

  // Modal State
  isModalOpen = signal(false);
  selectedAthlete = signal<Athlete | null>(null);

  onProfile(id: string) {
    const athlete = ATHLETES.find((a) => a.id === id);
    if (athlete) {
      this.selectedAthlete.set(athlete);
      this.isModalOpen.set(true);
    }
  }

  closeModal() {
    this.isModalOpen.set(false);
  }
}

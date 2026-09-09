import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Club } from '../../../core/models/clubs-model';
import { Button } from "../../atoms/button/button";
import { Badge } from "../../atoms/badge/badge";
import { Rating } from "../../advanced-atoms/rating/rating";
import { Tag } from "../../advanced-atoms/tag/tag";

@Component({
  selector: 'app-club-card',
  standalone: true,
  imports: [Button, Badge, Rating, Tag],
  templateUrl: './club-card.html',
  styleUrl: './club-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClubCard {
  club = input.required<Club>();
  explore = output<string>();
}

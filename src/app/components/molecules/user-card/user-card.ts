import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Badge } from "../../atoms/badge/badge";
import { Button } from "../../atoms/button/button";
import { User } from './user';
import { Avatar } from "../../advanced-atoms/avatar/avatar";

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [Badge, Button, Avatar],
  templateUrl: './user-card.html',
  styleUrl: './user-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCard {

  user = input.required<User>();

  profile = output<string>();

  exploreProfile(): void {
    this.profile.emit(this.user().id);
  }
}

import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-nav-item',
  imports: [],
  templateUrl: './nav-item.html',
  styleUrl: './nav-item.scss',
})
export class NavItem {
  label = input.required<string>();
  icon = input('');
  active = input(false);
  navigate = output<void>();
}

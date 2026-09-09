import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [],
  templateUrl: './tabs.html',
  styleUrl: './tabs.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Tabs {
  tabs = input.required<string[]>();
  activeIndex = signal(0);
  tabChange = output<number>();

  selectTab(index: number) {
    this.activeIndex.set(index);
    this.tabChange.emit(index);
  }
  onTabChange(index: number): void {
    console.log('Tab seleccionado:', index);
  }
}

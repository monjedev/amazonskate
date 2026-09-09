import { Component, signal } from '@angular/core';
import { LayoutComponent } from './layouts/layout-component/layout-component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('amazon-skate');
}

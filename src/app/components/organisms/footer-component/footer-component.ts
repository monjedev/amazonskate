import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTACT_INFO } from '../../../core/mocks/contact-mock';

@Component({
  selector: 'app-footer-component',
  standalone: true,
  imports: [],
  templateUrl: './footer-component.html',
  styleUrl: './footer-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  contactItems = CONTACT_INFO;
  year = new Date().getFullYear();
}

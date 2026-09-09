import { Component } from '@angular/core';
import { CONTACT_INFO, FAQS, SCHEDULES } from '../../../core/mocks/contact-mock';
import { ContactForm } from "../../organisms/contact-form/contact-form";

@Component({
  selector: 'app-contact-page',
  imports: [ContactForm],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.scss',
})
export class ContactPage {
  info = CONTACT_INFO;
  faqs = FAQS;
  schedules = SCHEDULES;
}

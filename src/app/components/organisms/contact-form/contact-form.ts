import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { InputField } from "../../atoms/input-field/input-field";
import { FormField } from "../../molecules/form-field/form-field";
import { CheckboxComponent } from "../../atoms/checkbox-component/checkbox-component";
import { Button } from "../../atoms/button/button";

@Component({
  selector: 'app-contact-form',
  imports: [InputField, FormField, CheckboxComponent, Button],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
export class ContactForm {
  private fb = inject(FormBuilder);
  form = this.fb.nonNullable.group({
    tribalName: [''],
    clanLastName: [''],
    email: [''],
    emergencyLine: [''],
    consultationType: [''],
    message: [''],
    subscribe: [false],
  });
  onSubmit() {
    if (this.form.valid) console.log(this.form.getRawValue());
  }
}

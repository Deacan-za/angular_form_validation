import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormErrors, ValidationMessages } from '../models/index';


@Injectable()
export class ValidationService {

  public formErrors: FormErrors = new FormErrors();
  public validationMessages: ValidationMessages = new ValidationMessages();

  onValueChanged(inputForm?: FormGroup, data?: any) {
    if (!inputForm) { return; }
    const form = inputForm;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += (<any>messages)[key] + ' ';
        }
      }
    }
  }
}

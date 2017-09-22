import { FormErrorsInterface, ValidationMessagesInterface } from './validation.interface';


export class FormErrors implements FormErrorsInterface {
  public UserName: string;
  [field: string]: string;

  constructor(obj?: FormErrors) {
    this.UserName = obj && obj.UserName || '';
  }
}

export class ValidationMessages implements ValidationMessagesInterface {
  UserName: Object;
  [field: string]: Object;

  constructor(obj?: ValidationMessages) {
    this.UserName = new Object({
      required: 'User name is required'
    });
  }
}

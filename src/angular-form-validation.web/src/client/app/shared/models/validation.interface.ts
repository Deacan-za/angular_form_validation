export interface FormErrorsInterface {
  UserName: string;
  [field: string]: string;
}

export interface ValidationMessagesInterface {
  UserName: Object;
  [field: string]: Object;
}

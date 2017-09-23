# README #

Yarn or npm install
npm start

### What is this repository for? ###

Quick summary
Small implementation of angular reactive forms, using a global service and object to display messages.
this allows you to pass all your form validations though a single service and object to recieve the
appropriate error message.

### How to use ###
Ensure that the properties of your FormErrors and ValidationMessages models are the same as the form controls you specify in your form builder.

ie:

this.FormErrors.UserName
this.ValidationMessages.UserName

this.form = this.fb.group({
  UserName: ['',[Validators.required]]
});

If you want to cater for more validators just add the validator as a property in the ValidationMessages and include your string.

Will cater for any custom validators too.

### Who do I talk to? ###

Brandonshaw@live.co.za

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormErrors } from '../shared/models/index';
import { ValidationService } from '../shared/services/index';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {
  public UserForm: FormGroup;
  public showtext: string;
  public formErrors: FormErrors = new FormErrors();

  constructor(private _fb: FormBuilder, private _validationService: ValidationService) {}

  ngOnInit() {
    this.buildform();
  }

  ok() {
    console.log(this.UserForm.get('UserName').value);
    this.showtext = this.UserForm.get('UserName').value;
  }

  private buildform() {
    this.UserForm = this._fb.group({
      UserName: ['', [Validators.required]]
    });

    this.UserForm.valueChanges
    .subscribe(data => {
      this._validationService.onValueChanged(this.UserForm, data);
      this.formErrors = this._validationService.formErrors;
    });

    this._validationService.onValueChanged();
  }


}

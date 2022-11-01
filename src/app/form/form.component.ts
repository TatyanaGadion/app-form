import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { asyncUrlValidator, emailValidator, rangeValidator } from '../custom-validators';
import { FORM_ERRORS, FORM_LABELS, FORM_PLACEHOLDERS, FORM_ROLES, FORM_SUCCESS, FORM_VALIDATION_MESSAGES } from '../form-data';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  formLabels = FORM_LABELS;
  formPlaceholder = FORM_PLACEHOLDERS;
  formSuccess = FORM_SUCCESS;
  roles: string[] = FORM_ROLES;
  validationMessages: any = FORM_VALIDATION_MESSAGES;
  formErrors: any = FORM_ERRORS;
  userForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  get name(): AbstractControl { return this.userForm.controls['name']; }
  get password(): AbstractControl { return this.userForm.controls['password']; }
  get email(): AbstractControl { return this.userForm.controls['email']; }
  get age(): AbstractControl { return this.userForm.controls['age']; }
  get site(): AbstractControl { return this.userForm.controls['site']; }
  get role(): AbstractControl { return this.userForm.controls['role']; }

  ngOnInit(): void {
    this.initializeForm();
  }

  onSubmit(): void { }

  private initializeForm(): void {
    this.userForm = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      password: [null, [Validators.required, Validators.minLength(7), Validators.maxLength(25)]],
      email: [null, [Validators.required, emailValidator]],
      age: [null, [Validators.required, rangeValidator(1, 122)]],
      site: [null, [Validators.required], [asyncUrlValidator]],
      role: [null, [Validators.required]]
    });

    this.userForm.valueChanges?.subscribe(() => this.onValueChanges());
  }

  onValueChanges(): void {
    const form = this.userForm;

    Object.keys(this.formErrors).forEach((field) => {
      const control = form.get(field);
      this.formErrors[field] = '';

      if (control?.invalid && (control.dirty || control.touched)) {
        const messages = this.validationMessages[field];

        Object.keys(control.errors as ValidationErrors).every(key => {
          this.formErrors[field] = messages[key];
        });
      }
    });
  }
}


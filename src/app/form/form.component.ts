import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, ValidationErrors } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit, AfterViewInit {
  roles: string[] = ['Гость', 'Пользователь', 'Модератор', 'Администратор'];

  user: User = new User(1, null, null, null);

  formErrors: any = {
    name: '',
    age: '',
  };

  validationMessages: any = {
    name: {
      required: 'Имя обязательно!',
      minlength: 'Имя должно содержать минимум 4 символа.',
    },
    age: {
      required: 'Возраст обязателен!',
    },
  };

  @ViewChild('userForm') userForm!: NgForm;

  constructor() {}

  ngOnInit(): void {
    console.log(this.userForm);
  }

  ngAfterViewInit(): void {
    this.userForm.valueChanges?.subscribe(() => this.onValueChanges());
  }

  onSubmit(): void {
    console.log('Form submitted');
  }

  private onValueChanges(): void {
    const form = this.userForm.form;

    Object.keys(this.formErrors).forEach((field) => {
      const control = form.get(field);
      this.formErrors[field] = '';

      if (control && control.dirty && control.invalid) {
        const messages = this.validationMessages[field];

        Object.keys(control.errors as ValidationErrors).forEach((key) => {
          console.log(messages[key]);
          this.formErrors[field] = messages[key] + ' ';
        });
      }
    });
  }
}
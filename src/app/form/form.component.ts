import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  userForm!: FormGroup;

  roles: string[] = ['Гость', 'Пользователь', 'Модератор', 'Администратор'];

  formErrors: any = {
    name: '',
    password: '',
    email: '',
    age: '',
    role: '',
  };

  validationMessages: any = {
    name: {
      required: 'Имя обязательно!',
      minlength: 'Имя должно содержать не менее 4 символов.',
      maxlength: 'Имя должно содержать не более 15 символов.',
    },
    password: {
      required: 'Пароль обязателен!',
      minlength: 'Пароль должен содержать не менее 7 символов.',
      maxlength: 'Пароль должен содержать не более 25 символов.',
    },
    email: {
      required: 'Email обязателен!',
      email: 'Неправильный формат email адреса.',
    },
    age: {
      required: 'Возраст обязателен!',
      pattern: 'Значение должно быть целым числом.',
    },
    role: {
      required: 'Роль обязательна!',
    },
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  onSubmit(): void {
    console.log(this.userForm.valid);
    console.log(this.userForm.value);
  }

  private initializeForm(): void {
    this.userForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(7),
          Validators.maxLength(25),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      role: ['', [Validators.required]],
    });

    this.userForm.valueChanges?.subscribe(() => this.onValueChanges());
  }

  private onValueChanges(): void {
    const form = this.userForm;

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

// user: User = new User(1, null, null, null, null, null);

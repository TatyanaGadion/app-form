export const FORM_LABELS = {
  name: 'Логин',
  password: 'Пароль',
  email: 'Email',
  age: 'Возраст',
  role: 'Роль'
};

export const FORM_PLACEHOLDERS = {
  name: 'Логин...',
  password: 'Пароль...',
  email: 'Email...',
  age: 'Возраст...',
  role: 'Выберите роль из списка...'
};

export const FORM_SUCCESS = {
  name: 'Принято!',
  password: 'Принято!',
  email: 'Принято!',
  age: 'Принято!',
  role: 'Принято!'
};

export const FORM_VALIDATION_MESSAGES = {
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
    emailValidator: 'Неправильный формат email адреса.',
  },
  age: {
    required: 'Возраст обязателен!',
    rangeValidator: 'Значение должно быть целым числом в диапазоне 1-122.',
    minRange: 'Значение должно быть больше 1.',
    maxRange: 'Значение должно быть меньше 122.',
  },
  role: {
    required: 'Роль обязательна!',
  },
};

export const FORM_ERRORS = {
  name: '',
  password: '',
  email: '',
  age: '',
  role: '',
};

export const FORM_ROLES = ['Гость', 'Пользователь', 'Модератор', 'Администратор'];

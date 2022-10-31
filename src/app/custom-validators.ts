import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function emailValidator(control: AbstractControl):  ValidationErrors | null {
  const value = control.value;
  const emailRegex = /^([a-zA-Z0-9_.\-])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,6})$/;
  const result = emailRegex.test(value);

  if (!result) return { emailValidator: { value } };

  return null;
}

export function rangeValidator(minValue: number, maxValue: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (isNaN(value)) return {rangeValidator: {value}};
    if (value < minValue) return {minRange: value};
    if (value > maxValue) return {maxRange: value};

    return null
  }
}

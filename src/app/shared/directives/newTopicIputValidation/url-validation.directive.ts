import { Directive } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appUrlValidation]'
})
export class UrlValidationDirective {
  constructor() {}
}

export function urlValidator(): ValidatorFn {
  const urlRegex: RegExp = new RegExp(
    '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
  );
  const uncRegex: RegExp = new RegExp(
    '\\\\[a-zA-Z0-9\.\-_]{1,}(\\[a-zA-Z0-9\-_]{1,){0,1}[\$]{0,1}'
  );
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbiddenUrl = urlRegex.test(control.value);
    const forbiddenUnc = uncRegex.test(control.value);
    return forbiddenUnc || forbiddenUrl
      ? null
      : { forbiddenInput: { value: control.value } };
  };
}

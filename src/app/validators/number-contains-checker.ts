import { FormControl } from '@angular/forms';

export function NumContainsValidator(control: FormControl): {[s: string]: boolean} {
  let text: string = control.value;
  var isContains =  this.regex.test(text);
  if(isContains)
  {
    return { 'containsNumbers' : true };
  }
  return null;
}


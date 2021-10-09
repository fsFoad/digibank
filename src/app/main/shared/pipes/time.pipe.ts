import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePipe'
})

export class TimePipe implements PipeTransform {

  transform(value: number| string): any {
    let newValue;
    if (value.toString().length === 5) {
      newValue = '0' + value.toString();
    } else {
      newValue = value.toString();
    }
    return newValue.toString().substr(0, 2) +
      ':' + newValue.toString().substr(2, 2) +
      ':' + newValue.toString().substr(4, 2);
  }

}

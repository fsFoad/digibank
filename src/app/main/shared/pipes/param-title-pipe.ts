import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paramTitle'
})
export class ParameterTitlePipe implements PipeTransform {

  transform(value, list: any[], identity = 'id', label = 'title'): any {
    let a: any[];

    if (value && list && list.length > 0) {
      a = list.filter(a =>
        a[identity] === Number(value)
      );
      if (a && a.length > 0) {
        return `${value} - ${a[0][label]}`;
      } else {
        return '';
      }
    } else {
      return value === 0 ? '' : value;
    }
  }


}

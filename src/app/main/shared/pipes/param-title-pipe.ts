import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'paramTitle'
})
export class ParameterTitlePipe implements PipeTransform {


  transform(value, list: any[], identity = 'id', label = 'title'): any {
    let a: any[];
    let b: any;
    let tempType: string;

    if (value && list && list.length > 0) {
      tempType = (value).toString();
      a = list.filter(a =>
        a[identity] === (tempType)
      );
      if (a && a.length > 0) {

        b = `${value} - ${a[0][label]}`;
        return b;
      } else {
        return '';
      }
    } else {
      return value === 0 ? '' : value;
    }
  }


}

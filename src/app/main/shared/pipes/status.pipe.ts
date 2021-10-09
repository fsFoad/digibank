import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusPipe'
})
export class StatusPipe implements PipeTransform {

  transform(value: number): string {
    switch (Number(value)) {
      case 0:
        return "";
      case 1:
        return "فعال";
      case 2:
        return "غیرفعال";
    }
  }
}

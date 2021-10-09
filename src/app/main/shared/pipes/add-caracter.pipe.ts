import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'addcaracterpipe'
})
export class AddCaracterPipe implements PipeTransform {

    transform(value: any, caracter: string): any {
        return value ? caracter + value.toString() : '';
    }


}

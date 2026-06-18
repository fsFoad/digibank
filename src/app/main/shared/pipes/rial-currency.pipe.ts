import {Pipe, PipeTransform} from '@angular/core';
import {addCommas} from "persian-tools2";

@Pipe({
    name: 'rialCurrencyPipe'
})
export class RialCurrencyPipe implements PipeTransform {

    transform(value: number | string): any {
        if (value) {
            let newValue = ''
            newValue = addCommas(value);
            newValue = newValue + 'ریال'
            return newValue;
        } else {
            return value;
        }
    }

}

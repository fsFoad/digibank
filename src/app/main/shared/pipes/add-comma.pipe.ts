import {Pipe, PipeTransform} from '@angular/core';
import {addCommas} from "persian-tools2";

@Pipe({
    name: 'addCommaSeparator'
})
export class AddCommaPipe implements PipeTransform {

    transform(value: number | string): any {
        if ((typeof value) === "string" || "number") {
            let newValue = '';
            newValue = addCommas(value);
            return newValue;
        } else {
            return value;
        }
    }
}

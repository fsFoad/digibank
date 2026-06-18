import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'restrictionTypePipe'
})
export class RestrictionTypePipe implements PipeTransform {

    transform(value: number): string {
        switch (Number(value)) {
            case 0:
                return "";
            case 1:
                return "مجاز";
            case 2:
                return "ممنوع";
        }
    }
}

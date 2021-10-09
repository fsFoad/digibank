import {Directive, ElementRef, HostListener} from '@angular/core';
import {addCommas} from "persian-tools2";

@Directive({
    selector: '[AddCommaDirective]'
})
export class AddCommaDirective {
    constructor(private el: ElementRef) {
    }

    @HostListener('blur', ['$event']) onKeyDown(event) {
        console.log(this.el.nativeElement.value);
        this.el.nativeElement.value = addCommas(this.el.nativeElement.value);
        return true;
    }

    // @HostListener("input")
    // onInput(){
    //     console.log('input')
    //     console.log(this.el.nativeElement.value);
    //     let newValue=this.el.nativeElement.value;
    //     newValue = digitsFaToEn(newValue);
    //     newValue = addCommas(newValue);
    //     newValue = digitsEnToFa(newValue); // "۱۲۳۴۵۶";
    //     this.el.nativeElement.value = newValue;
    //     return true;
    // }

}

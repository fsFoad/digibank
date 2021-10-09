import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-register-bon-card',
    templateUrl: './register-bon-card.component.html',
    styleUrls: ['./register-bon-card.component.scss']
})
export class RegisterBonCardComponent implements OnInit {
    listDrop: { label: string, value: number }[] = [];

    constructor() {
    }

    ngOnInit(): void {
        this.listDrop = [
            {label: 'دریافت رمز پویا ', value: 1},
            {label: 'خرید پایانه فروشگاهی', value: 2},
            {label: 'برداشت نقدی', value: 3},

        ];
    }
}

import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-creat-wallet',
    templateUrl: './creat-wallet.component.html',
    styleUrls: ['./creat-wallet.component.scss']
})
export class CreatWalletComponent implements OnInit {
    listDrop: { label: string, value: number }[] = [];

    constructor() {
    }

    ngOnInit(): void {
        this.listDrop = [
            {label: 'دریافت رمز پویا ', value: 1},
            {label: 'خرید پایانه فروشگاهی', value: 2},
            {label: 'خرید اینترنتی', value: 3},

        ];
    }
}

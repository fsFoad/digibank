import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-create-yekta',
    templateUrl: './create-yekta.component.html',
    styleUrls: ['./create-yekta.component.scss']
})
export class CreateYektaComponent implements OnInit {
    listDrop: { label: string, value: number }[] = [];
    listDrop2: { label: string, value: number }[] = [];

    constructor() {
    }

    ngOnInit(): void {
        this.listDrop = [
            {label: 'با تاریخ انقضا ', value: 1},
            {label: 'حساس به مبلغ', value: 2},
            {label: 'حساس به حساب', value: 3},

        ];
        this.listDrop2 = [
            {label: 'الگوریتم نوع اول ', value: 1},
            {label: 'الگوریتم نوع دوم', value: 2},
            {label: 'الگوریتم نوع سوم', value: 3},

        ];
    }
}

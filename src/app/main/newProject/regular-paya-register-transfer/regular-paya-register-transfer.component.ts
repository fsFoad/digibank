import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-regular-paya-register-transfer',
    templateUrl: './regular-paya-register-transfer.component.html',
    styleUrls: ['./regular-paya-register-transfer.component.scss']
})
export class RegularPayaRegisterTransferComponent implements OnInit {
    ibon = 'IR';
    listDrop: { label: string, value: number }[] = [];

    constructor() {
    }

    ngOnInit(): void {
        this.listDrop = [
            {label: 'روزانه', value: 1},
            {label: 'هفتگی', value: 2},
            {label: 'ماهانه', value: 3},
            {label: 'فصلی', value: 4},
            {label: 'سالانه', value: 5},
        ];
    }

}

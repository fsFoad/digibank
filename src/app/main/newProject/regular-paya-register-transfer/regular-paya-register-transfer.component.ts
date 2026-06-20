import {Component, OnInit} from '@angular/core';
import { Constants } from '../../shared/constants/Constants';

@Component({
    selector: 'app-regular-paya-register-transfer',
    templateUrl: './regular-paya-register-transfer.component.html',
    styleUrls: ['./regular-paya-register-transfer.component.scss']
})
export class RegularPayaRegisterTransferComponent implements OnInit {
    ibon = 'IR';
    listDrop: { label: string, value: number }[] = Constants.regularPayaRegisterTransfer_listDrop;

    constructor() {
    }

    ngOnInit(): void {
        this.listDrop = Constants.regularPayaRegisterTransfer_listDrop_x;
    }

}

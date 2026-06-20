import { Component, OnInit } from '@angular/core';
import {numericIndexGetter} from '@swimlane/ngx-datatable';
import {coerceNumberProperty} from '@angular/cdk/coercion';
import {Constants} from '../../shared/constants/Constants';

@Component({
  selector: 'app-report-bank-transfer',
  templateUrl: './report-bank-transfer.component.html',
  styleUrls: ['./report-bank-transfer.component.scss']
})
export class ReportBankTransferComponent implements OnInit {
  acItems = Constants.acItems;
  HavaleInternetiStatus = Constants.HavaleInternetiStatus;
  referralType = Constants.referralType;
    tableFlag=false;
    fsList: { accountNumber: string, typeTranslate: string,statusTranslate:string ,
        dateRegistration:string,dateDue:string,beneficiary:string,nationalCode:number,
        numberTranslate:number, boxTranslate:number,amount:number,ErrDes:string}[] = Constants.reportBankTransfer_numberTranslate;
    constructor() {
    }

    ngOnInit(): void {
    }

}

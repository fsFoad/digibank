import { Component, OnInit } from '@angular/core';
import {numericIndexGetter} from '@swimlane/ngx-datatable';
import {coerceNumberProperty} from '@angular/cdk/coercion';

@Component({
  selector: 'app-report-bank-transfer',
  templateUrl: './report-bank-transfer.component.html',
  styleUrls: ['./report-bank-transfer.component.scss']
})
export class ReportBankTransferComponent implements OnInit {
    tableFlag=false;
    fsList: { accountNumber: number, typeTranslate: string,statusTranslate:string ,
        dateRegistration:string,dateDue:string,beneficiary:string,nationalCode:number,
        numberTranslate:number, boxTranslate:number,amount:number,ErrDes:string}[] = [
        { "accountNumber": 1574655249, "typeTranslate": "پایا",
            "statusTranslate":"آماده پرداخت" ,"dateRegistration":"1399/09/09",
            "dateDue":"1399/09/09","beneficiary":"علی اسدی","nationalCode":1324135454,
            "numberTranslate":2225543,"boxTranslate":10000,"amount":7000000,"ErrDes":"ندارد"},
        { "accountNumber": 7541589521, "typeTranslate": "پایا"
            ,"statusTranslate":"آماده پرداخت","dateRegistration":"1399/09/09",
            "dateDue":"1399/09/09","beneficiary":"علی اسدی","nationalCode":1324135454,
            "numberTranslate":2225543,"boxTranslate":10000,"amount":7000000,"ErrDes":"ندارد"},
        { "accountNumber": 7548621548, "typeTranslate": "پایا"
            ,"statusTranslate":"آماده پرداخت","dateRegistration":"1399/09/09",
            "dateDue":"1399/09/09","beneficiary":"علی اسدی","nationalCode":1324135454,
            "numberTranslate":2225543,"boxTranslate":10000,"amount":7000000,"ErrDes":"ندارد"},
        { "accountNumber": 1548254962, "typeTranslate": "پایا"
            ,"statusTranslate":"آماده پرداخت","dateRegistration":"1399/09/09",
            "dateDue":"1399/09/09","beneficiary":"علی اسدی","nationalCode":1324135454,
            "numberTranslate":2225543,"boxTranslate":10000,"amount":7000000,"ErrDes":"ندارد"},
        { "accountNumber": 8465215749, "typeTranslate": "پایا"
            ,"statusTranslate":"آماده پرداخت","dateRegistration":"1399/09/09",
            "dateDue":"1399/09/09","beneficiary":"علی اسدی","nationalCode":1324135454,
            "numberTranslate":2225543,"boxTranslate":10000,"amount":7000000,"ErrDes":"ندارد"},
        { "accountNumber": 3256157895, "typeTranslate": "پایا"
            ,"statusTranslate":"آماده پرداخت","dateRegistration":"1399/09/09",
            "dateDue":"1399/09/09","beneficiary":"علی اسدی","nationalCode":1324135454,
            "numberTranslate":2225543,"boxTranslate":10000,"amount":7000000,"ErrDes":"ندارد"},
        { "accountNumber": 7416581213, "typeTranslate": "پایا"
            ,"statusTranslate":"آماده پرداخت","dateRegistration":"1399/09/09",
            "dateDue":"1399/09/09","beneficiary":"علی اسدی","nationalCode":1324135454,
            "numberTranslate":2225543,"boxTranslate":10000,"amount":7000000,"ErrDes":"ندارد"},
        { "accountNumber": 8742154565, "typeTranslate": "پایا"
            ,"statusTranslate":"آماده پرداخت","dateRegistration":"1399/09/09",
            "dateDue":"1399/09/09","beneficiary":"علی اسدی","nationalCode":1324135454,
            "numberTranslate":2225543,"boxTranslate":10000,"amount":7000000,"ErrDes":"ندارد"},
        { "accountNumber": 1525844572, "typeTranslate": "پایا"
            ,"statusTranslate":"آماده پرداخت","dateRegistration":"1399/09/09",
            "dateDue":"1399/09/09","beneficiary":"علی اسدی","nationalCode":1324135454,
            "numberTranslate":2225543,"boxTranslate":10000,"amount":7000000,"ErrDes":"ندارد"},
        { "accountNumber": 8754788621, "typeTranslate": "پایا"
            ,"statusTranslate":"آماده پرداخت","dateRegistration":"1399/09/09",
            "dateDue":"1399/09/09","beneficiary":"علی اسدی","nationalCode":1324135454,
            "numberTranslate":2225543,"boxTranslate":10000,"amount":7000000,"ErrDes":"ندارد"},
    ];
    constructor() {
    }

    ngOnInit(): void {
    }

}

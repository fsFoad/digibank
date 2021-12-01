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
    fsList: { accountNumber: number, typeTranslate: string,statusTranslate:string ,
        dateRegistration:string,dateDue:string,beneficiary:string,nationalCode:number,
        numberTranslate:number, boxTranslate:number,amount:number,ErrDes:string}[] = [
        { "accountNumber": 1574655249, "typeTranslate": "حواله اینترنتی",
            "statusTranslate":"ثبت اولیه" ,"dateRegistration":"1399/01/10",
            "dateDue":"1399/07/03","beneficiary":"کریم حسنی","nationalCode":1324135454,
            "numberTranslate":2225543,"boxTranslate":10000,"amount":4000000,"ErrDes":"ندارد"},
        { "accountNumber": 7541589521, "typeTranslate": "حواله اینترنتی"
            ,"statusTranslate":"تایید نهایی","dateRegistration":"1399/01/13",
            "dateDue":"1399/07/09","beneficiary":"حبیب حسینی","nationalCode":5851542358,
            "numberTranslate":2225543,"boxTranslate":10000,"amount":15000000,"ErrDes":"ندارد"},
        { "accountNumber": 7548621548, "typeTranslate": "حواله اینترنتی"
            ,"statusTranslate":"تایید نهایی","dateRegistration":"1399/02/15",
            "dateDue":"1399/07/27","beneficiary":"نوین سازان","nationalCode":4452153584,
            "numberTranslate":2225543,"boxTranslate":10000,"amount":2000000,"ErrDes":"ندارد"},
        { "accountNumber": 1548254962, "typeTranslate": "حواله اینترنتی"
            ,"statusTranslate":"در انتظار تایید","dateRegistration":"1399/03/09",
            "dateDue":"1399/08/03","beneficiary":"عرفان حشمتی","nationalCode":6659243574,
            "numberTranslate":2225543,"boxTranslate":10000,"amount":6000000,"ErrDes":"ندارد"},
        { "accountNumber": 8465215749, "typeTranslate": "حواله اینترنتی"
            ,"statusTranslate":"تایید نهایی","dateRegistration":"1399/05/02",
            "dateDue":"1399/08/16","beneficiary":"علی اسدی","nationalCode":6524851675,
            "numberTranslate":2225543,"boxTranslate":10000,"amount":10000000,"ErrDes":"ندارد"},
        { "accountNumber": 3256157895, "typeTranslate": "حواله اینترنتی"
            ,"statusTranslate":"تایید نهایی","dateRegistration":"1399/05/21",
            "dateDue":"1399/08/22","beneficiary":"پیشروپلاس","nationalCode":9981542547,
            "numberTranslate":2225543,"boxTranslate":10000,"amount":2000000,"ErrDes":"ندارد"},
        { "accountNumber": 7416581213, "typeTranslate": "حواله اینترنتی"
            ,"statusTranslate":"خطا دار","dateRegistration":"1399/06/01",
            "dateDue":"1399/09/07","beneficiary":"کامیار کاظمی","nationalCode":3568425147,
            "numberTranslate":2225543,"boxTranslate":10000,"amount":1000000,"ErrDes":"ندارد"},
        { "accountNumber": 8742154565, "typeTranslate": "حواله اینترنتی"
            ,"statusTranslate":"تایید نهایی","dateRegistration":"1399/06/08",
            "dateDue":"1399/09/10","beneficiary":"فرید ترابی","nationalCode":6522671532,
            "numberTranslate":2225543,"boxTranslate":10000,"amount":5000000,"ErrDes":"ندارد"},
        { "accountNumber": 1525844572, "typeTranslate": "حواله اینترنتی"
            ,"statusTranslate":"تایید نهایی","dateRegistration":"1399/06/25",
            "dateDue":"1399/09/11","beneficiary":"عماد همتی","nationalCode":1452485321,
            "numberTranslate":2225543,"boxTranslate":10000,"amount":8000000,"ErrDes":"ندارد"},
        { "accountNumber": 8754788621, "typeTranslate": "حواله اینترنتی"
            ,"statusTranslate":"لغو شده","dateRegistration":"1399/06/30",
            "dateDue":"1399/09/20","beneficiary":"سامان کاشانی","nationalCode":6593521452,
            "numberTranslate":2225543,"boxTranslate":10000,"amount":2000000,"ErrDes":"ندارد"},
    ];
    constructor() {
    }

    ngOnInit(): void {
    }

}

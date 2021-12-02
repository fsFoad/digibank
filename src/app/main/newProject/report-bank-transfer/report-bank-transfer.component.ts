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
        numberTranslate:number, boxTranslate:number,amount:number,ErrDes:string}[] = [
        { "accountNumber": "240-1000000589-58", "typeTranslate": "حواله اینترنتی",
            "statusTranslate":"ثبت اولیه" ,"dateRegistration":"1399/01/10",
            "dateDue":"1399/07/03","beneficiary":"کریم حسنی","nationalCode":1324135454,
            "numberTranslate":2225543,"boxTranslate":10000,"amount":4000000,"ErrDes":"ندارد"},
        { "accountNumber": "240-1000000589-25", "typeTranslate": "حواله اینترنتی"
            ,"statusTranslate":"تایید نهایی","dateRegistration":"1399/01/13",
            "dateDue":"1399/07/09","beneficiary":"حبیب حسینی","nationalCode":5851542358,
            "numberTranslate":2225544,"boxTranslate":10000,"amount":15000000,"ErrDes":"ندارد"},
        { "accountNumber": "340-1000000145-44", "typeTranslate": "حواله اینترنتی"
            ,"statusTranslate":"تایید نهایی","dateRegistration":"1399/02/15",
            "dateDue":"1399/07/27","beneficiary":"نوین سازان","nationalCode":4452153584,
            "numberTranslate":2225545,"boxTranslate":10000,"amount":2000000,"ErrDes":"ندارد"},
        { "accountNumber": "340-1000152145-67", "typeTranslate": "حواله اینترنتی"
            ,"statusTranslate":"در انتظار تایید","dateRegistration":"1399/03/09",
            "dateDue":"1399/08/03","beneficiary":"عرفان حشمتی","nationalCode":6659243574,
            "numberTranslate":2225546,"boxTranslate":10000,"amount":6000000,"ErrDes":"ندارد"},
        { "accountNumber": "340-1014500145-47", "typeTranslate": "حواله اینترنتی"
            ,"statusTranslate":"تایید نهایی","dateRegistration":"1399/05/02",
            "dateDue":"1399/08/16","beneficiary":"علی اسدی","nationalCode":6524851675,
            "numberTranslate":2225547,"boxTranslate":10000,"amount":10000000,"ErrDes":"ندارد"},
        { "accountNumber": "340-1084630145-14", "typeTranslate": "حواله اینترنتی"
            ,"statusTranslate":"تایید نهایی","dateRegistration":"1399/05/21",
            "dateDue":"1399/08/22","beneficiary":"پیشروپلاس","nationalCode":9981542547,
            "numberTranslate":2225548,"boxTranslate":10000,"amount":2000000,"ErrDes":"ندارد"},
        { "accountNumber": "340-1008546214-94", "typeTranslate": "حواله اینترنتی"
            ,"statusTranslate":"خطا دار","dateRegistration":"1399/06/01",
            "dateDue":"1399/09/07","beneficiary":"کامیار کاظمی","nationalCode":3568425147,
            "numberTranslate":2225549,"boxTranslate":10000,"amount":1000000,"ErrDes":"ندارد"},
        { "accountNumber": "340-1006250145-26", "typeTranslate": "حواله اینترنتی"
            ,"statusTranslate":"تایید نهایی","dateRegistration":"1399/06/08",
            "dateDue":"1399/09/10","beneficiary":"فرید ترابی","nationalCode":6522671532,
            "numberTranslate":2225550,"boxTranslate":10000,"amount":5000000,"ErrDes":"ندارد"},
        { "accountNumber": "240-1000254985-58", "typeTranslate": "حواله اینترنتی"
            ,"statusTranslate":"تایید نهایی","dateRegistration":"1399/06/25",
            "dateDue":"1399/09/11","beneficiary":"عماد همتی","nationalCode":1452485321,
            "numberTranslate":2225551,"boxTranslate":10000,"amount":8000000,"ErrDes":"ندارد"},
        { "accountNumber": "340-1000157359-35", "typeTranslate": "حواله اینترنتی"
            ,"statusTranslate":"لغو شده","dateRegistration":"1399/06/30",
            "dateDue":"1399/09/20","beneficiary":"سامان کاشانی","nationalCode":6593521452,
            "numberTranslate":2225552,"boxTranslate":10000,"amount":2000000,"ErrDes":"ندارد"},
    ];
    constructor() {
    }

    ngOnInit(): void {
    }

}

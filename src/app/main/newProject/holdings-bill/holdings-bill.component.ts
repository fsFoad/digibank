import { Component, OnInit } from '@angular/core';
import {Constants} from '../../shared/constants/Constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-holdings-bill',
  templateUrl: './holdings-bill.component.html',
  styleUrls: ['./holdings-bill.component.scss']
})
export class HoldingsBillComponent implements OnInit {
  upOrDownloadFlag=false;
  acItems = Constants.acItems;
  bankNameList = Constants.bankNameList;
  organList: { label: string, value: number }[] = [];
  representationList: { label: string, value: number }[] = [];
  operationList: { label: string, value: number }[] = [];

  // accountList: { label: string, value: number }[] = [];

  tableList: {
    bankId: number;
    bankName: string;
    accountInfo: {
      transactionNumber: number;
      accountNumber: number;
      branchName: string;
      transactionDate: string;
      yektaTransactionID: number;
      docNumber: number;
      typeOperation: string;
      amount: number;
      remaining: number;
      desTransaction: string;
      transactionInfo: {
        organNumber: number,
        transactionAgent: string,
        terminalNumber: number,
        dateAccounting: string,
        accountingHeading: string,
        desOrganTransaction: string,
      }[]
    }[]
  }[]=[];
  tableFlag = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.organList = [
      {label: '-', value: 0},
      {label: 'هلدینگ 1', value: 1},
      {label: 'هلدینگ 2', value: 2},
      {label: 'هلدینگ 3', value: 3},

    ];
    this.representationList = [
      {label: '-', value: 0},
      {label: 'نمایندگی 10001', value: 1},
      {label: 'نمایندگی 10002', value: 2},
      {label: 'نمایندگی 10003', value: 3},
      {label: 'نمایندگی 10004', value: 4},

    ];
    this.operationList = [
      {label: '-', value: 0},
      {label: 'واریز', value: 1},
      {label: 'برداشت', value: 2},

    ];
    // this.accountList = [
    //     {label: '-', value: 0},
    //     {label: 'سپرده قرض الحسنه 10000122344', value: 1},
    //     {label: 'سپرده کوتاه مدت 2000099998888', value: 2},
    //
    // ];

    this.tableList =  [{
      bankId: 1,
      bankName: "بانک ملت",
      accountInfo:[ {
        transactionNumber: 1009200361,
        accountNumber: 100001223344,
        branchName: 'بازار',
        transactionDate: "1400/05/02",
        yektaTransactionID: 333300001111,
        docNumber: 1112,
        typeOperation: "واریز",
        amount: 1000000,
        remaining: 21000000,
        desTransaction: "بابت ثبت نام حمید حمیدی",
        transactionInfo: [{
          organNumber: 140000000078,
          transactionAgent: "پوز",
          terminalNumber: 333300001111,
          dateAccounting: "1400/05/10",
          accountingHeading: "تسویه اقلام باز- 5001",
          desOrganTransaction: "ثبت دفتر کل",

        }]
      }]
    }];


  }
  onUpOrDownload(upBill){
    this.upOrDownloadFlag = true;
  }


  goHome(): void {
    this.router.navigate(['/']);
  }
}

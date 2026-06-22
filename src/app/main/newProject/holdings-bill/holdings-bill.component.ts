import { Component, OnInit } from '@angular/core';
import {Constants} from '../../shared/constants/Constants';
import { Router } from '@angular/router';
import { DatasetService } from '../../shared/services/dataset.service';

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

  constructor(private router: Router, private datasetService: DatasetService) { }

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

    this.datasetService.loadRaw('holdings-bill-transactions', []).then((data: any[]) => {
      this.tableList = data;
    });

  }
  onUpOrDownload(upBill){
    this.upOrDownloadFlag = true;
  }


  goHome(): void {
    this.router.navigate(['/']);
  }
}

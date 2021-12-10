import {Component, OnInit} from '@angular/core';
import {Constants} from '../../shared/constants/Constants';

@Component({
    selector: 'app-report-status-wallet',
    templateUrl: './report-status-wallet.component.html',
    styleUrls: ['./report-status-wallet.component.scss']
})
export class ReportStatusWalletComponent implements OnInit {
    tableFlag = false;
  acItems = Constants.acItems;
  // dropList:{ label: string, value: number }[] = [];
    fsList: {
        accountNumber: string, history: string, personal: string, mobile: string,
        yektaCode: string, walletId: string, beneficiary: string, status: string,
        amounts: string, boxTranslate: string, amount: number, ErrDes: string
    }[] = [
        {
            'accountNumber': '240-1000000589-25', 'history': '1400/03/11', 'personal': 'عرفان حشمتی'
            , 'mobile': ' 09196425578', 'yektaCode': '3587545',
            'walletId': '33413353', 'beneficiary': '312', 'status': ' ',
            'amounts': '25000000', 'boxTranslate': ' ', 'amount': 10000, 'ErrDes': 'ندارد'
        },
        {
            'accountNumber': '340-1000000145-65', 'history': '1400/05/06', 'personal': 'رستم حبیبی'
            , 'mobile': ' 09123528456', 'yektaCode': '3587445',
            'walletId': '15845785', 'beneficiary': '313', 'status': ' ',
            'amounts': '87000000', 'boxTranslate': ' ', 'amount': 10000, 'ErrDes': 'ندارد'
        },
        {
            'accountNumber': '340-1000000189-26', 'history': '1400/07/25', 'personal': 'حبیب حسینی'
            , 'mobile': ' 09383531555', 'yektaCode': '352345',
            'walletId': '65148514', 'beneficiary': '314', 'status': ' ',
            'amounts': '50000000 ', 'boxTranslate': ' ', 'amount': 10000, 'ErrDes': 'ندارد'
        },
        {
            'accountNumber': '440-1006580523-01', 'history': '1400/08/01', 'personal': 'کامیار کاظمی'
            , 'mobile': ' 09373535574', 'yektaCode': '343315',
            'walletId': '65541658', 'beneficiary': '315', 'status': ' ',
            'amounts': '10000000 ', 'boxTranslate': ' ', 'amount': 10000, 'ErrDes': 'ندارد'
        },
        // {
        //     'accountNumber': 7416581213, 'history': '1400/05/01', 'personal': 'فرید ترابی'
        //     , 'mobile': ' 09196425578', 'yektaCode': '345323545',
        //     'walletId': '15485214', 'beneficiary': '316', 'status': ' ',
        //     'amounts': '100000 ', 'boxTranslate': ' ', 'amount': 10000, 'ErrDes': 'ندارد'
        // },
        // {
        //     'accountNumber': 8742154565, 'history': '1400/05/01', 'personal': 'عماد همتی'
        //     , 'mobile': ' 09196425578', 'yektaCode': '34234543',
        //     'walletId': '95462086', 'beneficiary': '317', 'status': ' ',
        //     'amounts': '100000 ', 'boxTranslate': ' ', 'amount': 10000, 'ErrDes': 'ندارد'
        // },
        // {
        //     'accountNumber': 1525844572, 'history': '1400/05/01', 'personal': 'سامان کاشانی'
        //     , 'mobile': ' 09196425578', 'yektaCode': '32145',
        //     'walletId': '85475126', 'beneficiary': '318', 'status': ' ',
        //     'amounts': '100000 ', 'boxTranslate': ' ', 'amount': 10000, 'ErrDes': 'ندارد'
        // },
        // {
        //     'accountNumber': 8754788621, 'history': '1400/05/01', 'personal': 'سینا کریمی'
        //     , 'mobile': ' 09196425578', 'yektaCode': '3545445',
        //     'walletId': '60145218', 'beneficiary': '319', 'status': ' ',
        //     'amounts': '100000 ', 'boxTranslate': ' ', 'amount': 10000, 'ErrDes': 'ندارد'
        // },
    ];

    constructor() {
    }

    ngOnInit(): void {

      // this.dropList = [
      //   {label: '-', value: 1},
      //   {label: '7548621548', value: 2},
      //   {label: '1548254962', value: 3},
      //   {label: '8465215749', value:4 },
      // ];
    }

}

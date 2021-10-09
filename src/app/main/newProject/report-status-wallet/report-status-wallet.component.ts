import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-report-status-wallet',
    templateUrl: './report-status-wallet.component.html',
    styleUrls: ['./report-status-wallet.component.scss']
})
export class ReportStatusWalletComponent implements OnInit {
    tableFlag = false;
    fsList: {
        accountNumber: number, history: string, personal: string, mobile: string,
        yektaCode: string, walletId: string, beneficiary: string, status: string,
        amounts: string, boxTranslate: string, amount: number, ErrDes: string
    }[] = [
        {
            'accountNumber': 7548621548, 'history': '1400/05/01', 'personal': 'عرفان حشمتی'
            , 'mobile': ' 09196425578', 'yektaCode': '3587545',
            'walletId': '33413353', 'beneficiary': '312', 'status': '2222589',
            'amounts': '100000 ', 'boxTranslate': ' ', 'amount': 10000, 'ErrDes': 'ندارد'
        },
        {
            'accountNumber': 1548254962, 'history': '1400/05/01', 'personal': 'رستم حبیبی'
            , 'mobile': ' 09196425578', 'yektaCode': '3587445',
            'walletId': '15845785', 'beneficiary': '313', 'status': '2222589',
            'amounts': '100000 ', 'boxTranslate': ' ', 'amount': 10000, 'ErrDes': 'ندارد'
        },
        {
            'accountNumber': 8465215749, 'history': '1400/05/01', 'personal': 'حبیب حسینی'
            , 'mobile': ' 09196425578', 'yektaCode': '352345',
            'walletId': '651478514', 'beneficiary': '314', 'status': '2222589',
            'amounts': '100000 ', 'boxTranslate': ' ', 'amount': 10000, 'ErrDes': 'ندارد'
        },
        {
            'accountNumber': 3256157895, 'history': '1400/05/01', 'personal': 'کامیار کاظمی'
            , 'mobile': ' 09196425578', 'yektaCode': '343315',
            'walletId': '65541658', 'beneficiary': '315', 'status': '2222589',
            'amounts': '100000 ', 'boxTranslate': ' ', 'amount': 10000, 'ErrDes': 'ندارد'
        },
        {
            'accountNumber': 7416581213, 'history': '1400/05/01', 'personal': 'فرید ترابی'
            , 'mobile': ' 09196425578', 'yektaCode': '345323545',
            'walletId': '15485214', 'beneficiary': '316', 'status': '2222589',
            'amounts': '100000 ', 'boxTranslate': ' ', 'amount': 10000, 'ErrDes': 'ندارد'
        },
        {
            'accountNumber': 8742154565, 'history': '1400/05/01', 'personal': 'عماد همتی'
            , 'mobile': ' 09196425578', 'yektaCode': '34234543',
            'walletId': '95462086', 'beneficiary': '317', 'status': '2222589',
            'amounts': '100000 ', 'boxTranslate': ' ', 'amount': 10000, 'ErrDes': 'ندارد'
        },
        {
            'accountNumber': 1525844572, 'history': '1400/05/01', 'personal': 'سامان کاشانی'
            , 'mobile': ' 09196425578', 'yektaCode': '32145',
            'walletId': '85475126', 'beneficiary': '318', 'status': '2222589',
            'amounts': '100000 ', 'boxTranslate': ' ', 'amount': 10000, 'ErrDes': 'ندارد'
        },
        {
            'accountNumber': 8754788621, 'history': '1400/05/01', 'personal': 'سینا کریمی'
            , 'mobile': ' 09196425578', 'yektaCode': '3545445',
            'walletId': '60145218', 'beneficiary': '319', 'status': '2222589',
            'amounts': '100000 ', 'boxTranslate': ' ', 'amount': 10000, 'ErrDes': 'ندارد'
        },
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

}

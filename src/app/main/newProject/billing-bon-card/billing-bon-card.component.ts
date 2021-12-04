import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-billing-bon-card',
    templateUrl: './billing-bon-card.component.html',
    styleUrls: ['./billing-bon-card.component.scss']
})
export class BillingBonCardComponent implements OnInit {
    tableFlag = false;
    fsList: {
        accountNumber: number, history: string, branchName: string,
        yektaCode: string, dateDue: string, transactionDes: string, check: string,
        amounts: string, doc: string, amount: number, creditor: string
    }[] = [
        {
            'accountNumber': 1574655249, 'history': '1400/05/01',
            'branchName': 'دولت', 'yektaCode': '10000022',
            'dateDue': '423523452', 'transactionDes': 'پوز', 'check': '2222589',
            'amounts': ' 6785656566', 'doc': '5666', 'amount': 7000000, 'creditor': '10000'
        },
        {
            'accountNumber': 7541589521, 'history': '1400/05/01'
            , 'branchName': 'بازار', 'yektaCode': '10000022',
            'dateDue': '23423443', 'transactionDes': 'خودپرداز', 'check': '2222589',
            'amounts': ' 356676345', 'doc': '5666', 'amount': 7000000, 'creditor': '10000'
        },
        {
            'accountNumber': 7548621548, 'history': '1400/05/01'
            , 'branchName': 'تجریش', 'yektaCode': '10000022',
            'dateDue': '4542234', 'transactionDes': 'برداشت نقدی', 'check': '2222589',
            'amounts': ' 786745656', 'doc': '5666', 'amount': 7000000, 'creditor': '10000'
        },
        {
            'accountNumber': 1548254962, 'history': '1400/05/01'
            , 'branchName': 'دولت', 'yektaCode': '10000022',
            'dateDue': '456456345', 'transactionDes': 'انتقال وجه', 'check': '2222589',
            'amounts': '567678565', 'doc': '5666', 'amount': 7000000, 'creditor': '10000'
        },
        {
            'accountNumber': 8465215749, 'history': '1400/05/01'
            , 'branchName': 'تجریش', 'yektaCode': '10000022',
            'dateDue': '34534624', 'transactionDes': 'انتقال وجه', 'check': '2222589',
            'amounts': '5645765', 'doc': '5666', 'amount': 7000000, 'creditor': '10000'
        },
        {
            'accountNumber': 3256157895, 'history': '1400/05/01'
            , 'branchName': 'بازار', 'yektaCode': '10000022',
            'dateDue': '34556665', 'transactionDes': 'برداشت نقدی', 'check': '2222589',
            'amounts': '789677565', 'doc': '5666', 'amount': 7000000, 'creditor': '10000'
        },
        {
            'accountNumber': 7416581213, 'history': '1400/05/01'
            , 'branchName': 'رسالت', 'yektaCode': '10000022',
            'dateDue': '35656735434', 'transactionDes': 'انتقال وجه', 'check': '2222589',
            'amounts': '3545643467', 'doc': '5666', 'amount': 7000000, 'creditor': '10000'
        },
        {
            'accountNumber': 8742154565, 'history': '1400/05/01'
            , 'branchName': 'پاسداران', 'yektaCode': '10000022',
            'dateDue': '3453456567', 'transactionDes': 'انتقال وجه', 'check': '2222589',
            'amounts': ' 4323633', 'doc': '5666', 'amount': 7000000, 'creditor': '10000'
        },
        {
            'accountNumber': 1525844572, 'history': '1400/05/01'
            , 'branchName': 'الهیه', 'yektaCode': '10000022',
            'dateDue': '34534535676', 'transactionDes': 'برداشت نقدی', 'check': '2222589',
            'amounts': '346457658', 'doc': '5666', 'amount': 7000000, 'creditor': '10000'
        },
        {
            'accountNumber': 8754788621, 'history': '1400/05/01'
            , 'branchName': 'آفریقا', 'yektaCode': '10000022',
            'dateDue': '5645675656', 'transactionDes': 'انتقال وجه', 'check': '2222589',
            'amounts': ' 24365768', 'doc': '5666', 'amount': 7000000, 'creditor': '10000'
        },
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

}

import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-search-yekta',
    templateUrl: './search-yekta.component.html',
    styleUrls: ['./search-yekta.component.scss']
})
export class SearchYektaComponent implements OnInit {
    tableFlag = false;
    fsList: {
        accountNumber: number, history: string, branchCode: string,
        yektaCode: string, dateDue: string, Depositor: string, status: string,
        amounts: string, docNumber: string, amount: number, creditor: string
    }[] = [
        {
            'accountNumber': 1574655249, 'history': '1400/05/01',
            'branchCode': '85456', 'yektaCode': '10000022',
            'dateDue': '423523452', 'Depositor': 'علی محمدی', 'status': '2222589',
            'amounts': ' 6785656566', 'docNumber': '5666', 'amount': 7000000, 'creditor': '10000'
        },
        {
            'accountNumber': 7541589521, 'history': '1400/05/01'
            , 'branchCode': '85456', 'yektaCode': '10000022',
            'dateDue': '23423443', 'Depositor': 'سینا کریمی', 'status': '2222589',
            'amounts': ' 356676345', 'docNumber': '5666', 'amount': 7000000, 'creditor': '10000'
        },
        {
            'accountNumber': 7548621548, 'history': '1400/05/01'
            , 'branchCode': '85456', 'yektaCode': '10000022',
            'dateDue': '4542234', 'Depositor': 'سامان کاشانی', 'status': '2222589',
            'amounts': ' 786745656', 'docNumber': '5666', 'amount': 7000000, 'creditor': '10000'
        },
        {
            'accountNumber': 1548254962, 'history': '1400/05/01'
            , 'branchCode': '85456', 'yektaCode': '10000022',
            'dateDue': '456456345', 'Depositor': 'عماد همتی', 'status': '2222589',
            'amounts': '567678565', 'docNumber': '5666', 'amount': 7000000, 'creditor': '10000'
        },
        {
            'accountNumber': 8465215749, 'history': '1400/05/01'
            , 'branchCode': '85456', 'yektaCode': '10000022',
            'dateDue': '34534624', 'Depositor': 'فرید ترابی', 'status': '2222589',
            'amounts': '5645765', 'docNumber': '5666', 'amount': 7000000, 'creditor': '10000'
        },
        {
            'accountNumber': 3256157895, 'history': '1400/05/01'
            , 'branchCode': '85456', 'yektaCode': '10000022',
            'dateDue': '34556665', 'Depositor': 'کامیار کاظمی', 'status': '2222589',
            'amounts': '789677565', 'docNumber': '5666', 'amount': 7000000, 'creditor': '10000'
        },
        {
            'accountNumber': 7416581213, 'history': '1400/05/01'
            , 'branchCode': '85456', 'yektaCode': '10000022',
            'dateDue': '35656735434', 'Depositor': 'عرفان حشمتی', 'status': '2222589',
            'amounts': '3545643467', 'docNumber': '5666', 'amount': 7000000, 'creditor': '10000'
        },
        {
            'accountNumber': 8742154565, 'history': '1400/05/01'
            , 'branchCode': '85456', 'yektaCode': '10000022',
            'dateDue': '3453456567', 'Depositor': 'رستم حبیبی', 'status': '2222589',
            'amounts': ' 4323633', 'docNumber': '5666', 'amount': 7000000, 'creditor': '10000'
        },
        {
            'accountNumber': 1525844572, 'history': '1400/05/01'
            , 'branchCode': '85456', 'yektaCode': '10000022',
            'dateDue': '34534535676', 'Depositor': 'حبیب حسینی', 'status': '2222589',
            'amounts': '346457658', 'docNumber': '5666', 'amount': 7000000, 'creditor': '10000'
        },
        {
            'accountNumber': 8754788621, 'history': '1400/05/01'
            , 'branchCode': '85456', 'yektaCode': '10000022',
            'dateDue': '5645675656', 'Depositor': 'کریم حسنی', 'status': '2222589',
            'amounts': ' 24365768', 'docNumber': '5666', 'amount': 7000000, 'creditor': '10000'
        },
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

}

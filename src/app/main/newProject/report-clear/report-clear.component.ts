import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-report-clear',
    templateUrl: './report-clear.component.html',
    styleUrls: ['./report-clear.component.scss']
})
export class ReportClearComponent implements OnInit {
    tableFlag = false;
    fsList: {
        accountNumber: number, history: string, personal: string, branchCode: string,
        yektaCode: string, status: string, docNumber: string, check: string,
        amounts: string, committedBank: string, amount: number, committedBranchCode: string, docAccountNumber: number
    }[] = [
        {
            'accountNumber': 7548621548,
            'history': '1400/05/01',
            'personal': 'عرفان حشمتی',
            'branchCode': '85456',
            'yektaCode': '3587545',
            'status': '',
            'docNumber': '312',
            'check': '2222589',
            'amounts': '100000 ',
            'committedBank': ' ',
            'amount': 10000,
            'committedBranchCode': ' ',
            'docAccountNumber': 7548621548
        },
        {
            'accountNumber': 1548254962,
            'history': '1400/05/01',
            'personal': 'رستم حبیبی',
            'branchCode': '85456',
            'yektaCode': '3587445',
            'status': '',
            'docNumber': '313',
            'check': '2222589',
            'amounts': '100000 ',
            'committedBank': ' ',
            'amount': 10000,
            'committedBranchCode': ' ',
            'docAccountNumber': 7548621548
        },
        {
            'accountNumber': 8465215749,
            'history': '1400/05/01',
            'personal': 'حبیب حسینی'
            ,
            'branchCode': '85456',
            'yektaCode': '352345',
            'status': '',
            'docNumber': '314',
            'check': '2222589',
            'amounts': '100000 ',
            'committedBank': ' ',
            'amount': 10000,
            'committedBranchCode': ' ',
            'docAccountNumber': 7548621548
        },
        {
            'accountNumber': 3256157895,
            'history': '1400/05/01',
            'personal': 'کامیار کاظمی'
            ,
            'branchCode': '85456',
            'yektaCode': '343315',
            'status': '',
            'docNumber': '315',
            'check': '2222589',
            'amounts': '100000 ',
            'committedBank': ' ',
            'amount': 10000,
            'committedBranchCode': ' ',
            'docAccountNumber': 7548621548
        },
        {
            'accountNumber': 7416581213,
            'history': '1400/05/01',
            'personal': 'فرید ترابی'
            ,
            'branchCode': '85456',
            'yektaCode': '345323545',
            'status': '',
            'docNumber': '316',
            'check': '2222589',
            'amounts': '100000 ',
            'committedBank': ' ',
            'amount': 10000,
            'committedBranchCode': ' ',
            'docAccountNumber': 7548621548
        },
        {
            'accountNumber': 8742154565,
            'history': '1400/05/01',
            'personal': 'عماد همتی'
            ,
            'branchCode': '85456',
            'yektaCode': '34234543',
            'status': '',
            'docNumber': '317',
            'check': '2222589',
            'amounts': '100000 ',
            'committedBank': ' ',
            'amount': 10000,
            'committedBranchCode': ' ',
            'docAccountNumber': 7548621548
        },
        {
            'accountNumber': 1525844572,
            'history': '1400/05/01',
            'personal': 'سامان کاشانی'
            ,
            'branchCode': '85456',
            'yektaCode': '32145',
            'status': '',
            'docNumber': '318',
            'check': '2222589',
            'amounts': '100000 ',
            'committedBank': ' ',
            'amount': 10000,
            'committedBranchCode': ' ',
            'docAccountNumber': 7548621548
        },
        {
            'accountNumber': 8754788621,
            'history': '1400/05/01',
            'personal': 'سینا کریمی'
            ,
            'branchCode': '85456',
            'yektaCode': '3545445',
            'status': '',
            'docNumber': '319',
            'check': '2222589',
            'amounts': '100000 ',
            'committedBank': ' ',
            'amount': 10000,
            'committedBranchCode': ' ',
            'docAccountNumber': 7548621548
        },
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

}

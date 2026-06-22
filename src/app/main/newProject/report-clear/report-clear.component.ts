import { Component, OnInit } from '@angular/core';
import { Constants } from '../../shared/constants/Constants';

@Component({
    selector: 'app-report-clear',
    templateUrl: './report-clear.component.html',
    styleUrls: ['./report-clear.component.scss']
})
export class ReportClearComponent implements OnInit {
    // dropListAccountNumber:{ label: string, value: number }[] = [];
    acItems = Constants.acItems;
    bank = Constants.bankNameList;

    tableFlag = false;
    fsList: {
        accountNumber: number, history: string, personal: string, branchName: string,
        yektaCode: string, status: string, docNumber: string, check: string,
        amounts: string, committedBank: string, amount: number, committedBranchCode: string, docAccountNumber: number
    }[] = [
        {
            'accountNumber': 7548621548,
            'history': '1404/05/01',
            'personal': 'عرفان حشمتی',
            branchName: '',
            'yektaCode': '3587545',
            'status': '',
            'docNumber': '312',
            'check': '2222589',
            'amounts': '120000000 ',
            'committedBank': ' ',
            'amount': 120000000,
            'committedBranchCode': ' ',
            'docAccountNumber': 7548621548
        },
        {
            'accountNumber': 1548254962,
            'history': '1404/05/01',
            'personal': 'رستم حبیبی',
            branchName: '',
            'yektaCode': '3587445',
            'status': '',
            'docNumber': '313',
            'check': '2222589',
            'amounts': '35400000 ',
            'committedBank': ' ',
            'amount': 35400000,
            'committedBranchCode': ' ',
            'docAccountNumber': 7548621548
        },
        {
            'accountNumber': 8465215749,
            'history': '1404/05/01',
            'personal': 'حبیب حسینی'
            ,
            branchName: '',
            'yektaCode': '352345',
            'status': '',
            'docNumber': '314',
            'check': '2222589',
            'amounts': '66000000 ',
            'committedBank': ' ',
            'amount': 66000000,
            'committedBranchCode': ' ',
            'docAccountNumber': 7548621548
        },
        {
            'accountNumber': 3256157895,
            'history': '1404/05/01',
            'personal': 'کامیار کاظمی'
            ,
            branchName: '',
            'yektaCode': '343315',
            'status': '',
            'docNumber': '315',
            'check': '2222589',
            'amounts': '10000000 ',
            'committedBank': ' ',
            'amount': 10000000,
            'committedBranchCode': ' ',
            'docAccountNumber': 7548621548
        },
        {
            'accountNumber': 7416581213,
            'history': '1404/05/01',
            'personal': 'فرید ترابی'
            ,
            branchName: '',
            'yektaCode': '345323545',
            'status': '',
            'docNumber': '316',
            'check': '2222589',
            'amounts': '54200000 ',
            'committedBank': ' ',
            'amount': 54200000,
            'committedBranchCode': ' ',
            'docAccountNumber': 7548621548
        },
        {
            'accountNumber': 8742154565,
            'history': '1404/05/01',
            'personal': 'عماد همتی'
            ,
            branchName: '',
            'yektaCode': '34234543',
            'status': '',
            'docNumber': '317',
            'check': '2222589',
            'amounts': '31200000 ',
            'committedBank': ' ',
            'amount': 31200000,
            'committedBranchCode': ' ',
            'docAccountNumber': 7548621548
        },
        {
            'accountNumber': 1525844572,
            'history': '1404/05/01',
            'personal': 'سامان کاشانی'
            ,
            branchName: '',
            'yektaCode': '32145',
            'status': '',
            'docNumber': '318',
            'check': '2222589',
            'amounts': '22000000 ',
            'committedBank': ' ',
            'amount': 22000000,
            'committedBranchCode': ' ',
            'docAccountNumber': 7548621548
        },
        {
            'accountNumber': 8754788621,
            'history': '1404/05/01',
            'personal': 'سینا کریمی'
            ,
            branchName: '',
            'yektaCode': '3545445',
            'status': '',
            'docNumber': '319',
            'check': '2222589',
            'amounts': '12000000 ',
            'committedBank': ' ',
            'amount': 12000000,
            'committedBranchCode': ' ',
            'docAccountNumber': 7548621548
        },
    ].map((x, i) => ({ ...x, branchName: Constants.branchNames[i] }));

    constructor() {
    }

    ngOnInit(): void {
    }

}

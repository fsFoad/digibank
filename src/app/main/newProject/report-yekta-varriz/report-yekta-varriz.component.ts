import {Component, OnInit} from '@angular/core';
import {Constants} from '../../shared/constants/Constants';

@Component({
    selector: 'app-report-yekta-varriz',
    templateUrl: './report-yekta-varriz.component.html',
    styleUrls: ['./report-yekta-varriz.component.scss']
})
export class ReportYektaVarrizComponent implements OnInit {
  acItems = Constants.acItems;
    tableFlag = false;
    fsList: {
        accountNumber: number, history: string, branchCode: string,
        yektaCode: string, transactionTypeCode: string, docDes: string, debtor: string,
        creditor: string, remaining: string
    }[] = [
        {
            'accountNumber': 1574655249, 'history': '1400/05/01',
            'branchCode': '53434', 'yektaCode': '3223345',
            'transactionTypeCode': '', 'docDes': '312', 'debtor': '10000',
            'creditor': ' 0', 'remaining': '70000000'
        },
        {
            'accountNumber': 7541589521, 'history': '1400/05/01'
            , 'branchCode': '53434', 'yektaCode': '35454545',
            'transactionTypeCode': '', 'docDes': '312', 'debtor': '10000',
            'creditor': '0', 'remaining': '70000000'
        },
        {
            'accountNumber': 7548621548, 'history': '1400/05/01'
            , 'branchCode': '53434', 'yektaCode': '3587545',
            'transactionTypeCode': '', 'docDes': '312', 'debtor': '10000',
            'creditor': '0', 'remaining': '70000000'
        },
        {
            'accountNumber': 1548254962, 'history': '1400/05/01'
            , 'branchCode': '53434', 'yektaCode': '3587445',
            'transactionTypeCode': '', 'docDes': '312', 'debtor': '10000',
            'creditor': ' 0', 'remaining': '70000000'
        },
        {
            'accountNumber': 8465215749, 'history': '1400/05/01'
            , 'branchCode': '53434', 'yektaCode': '352345',
            'transactionTypeCode': '', 'docDes': '312', 'debtor': '100000',
            'creditor': '0 ', 'remaining': '70000000'
        },
        {
            'accountNumber': 3256157895, 'history': '1400/05/01'
            , 'branchCode': '53434', 'yektaCode': '343315',
            'transactionTypeCode': '', 'docDes': '312', 'debtor': '10000',
            'creditor': '0 ', 'remaining': '70000000'
        },
        {
            'accountNumber': 7416581213, 'history': '1400/05/01'
            , 'branchCode': '53434', 'yektaCode': '345323545',
            'transactionTypeCode': '', 'docDes': '312', 'debtor': '10000',
            'creditor': ' 0', 'remaining': '70000000'
        },
        {
            'accountNumber': 8742154565, 'history': '1400/05/01'
            , 'branchCode': '53434', 'yektaCode': '34234543',
            'transactionTypeCode': '', 'docDes': '312', 'debtor': '10000',
            'creditor': ' 0', 'remaining': '70000000'
        },
        {
            'accountNumber': 1525844572, 'history': '1400/05/01'
            , 'branchCode': '53434', 'yektaCode': '32145',
            'transactionTypeCode': '', 'docDes': '312', 'debtor': '10000',
            'creditor': ' 0', 'remaining': '70000000'
        },
        {
            'accountNumber': 8754788621, 'history': '1400/05/01'
            , 'branchCode': '53434', 'yektaCode': '3545445',
            'transactionTypeCode': '', 'docDes': '312', 'debtor': '10000',
            'creditor': '0 ', 'remaining': '70000000'
        },
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

}

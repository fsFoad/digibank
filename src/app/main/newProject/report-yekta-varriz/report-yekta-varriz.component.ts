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
        accountNumber: number, history: string, branchName: string,
        yektaCode: string, transactionTypeCode: string, docDes: string, debtor: string,
        creditor: string, remaining: string
    }[] = [
        {
            'accountNumber': 1574655249, 'history': '1400/05/01'
            ,'branchName': 'تجریش', 'yektaCode': '1000001986',
            'transactionTypeCode': '', 'docDes': '312', 'debtor': '10000',
            'creditor': ' 0', 'remaining': '70000000'
        },
        {
            'accountNumber': 7541589521, 'history': '1400/05/01'
            , 'branchName': 'بازار', 'yektaCode': '10000099',
            'transactionTypeCode': '', 'docDes': '312', 'debtor': '10000',
            'creditor': '0', 'remaining': '70000000'
        },
        {
            'accountNumber': 7548621548, 'history': '1400/05/01'
            , 'branchName': 'دولت', 'yektaCode': '100000889',
            'transactionTypeCode': '', 'docDes': '312', 'debtor': '10000',
            'creditor': '0', 'remaining': '70000000'
        },
        {
            'accountNumber': 1548254962, 'history': '1400/05/01'
            , 'branchName': 'گاندی', 'yektaCode': '1000003f',
            'transactionTypeCode': '', 'docDes': '312', 'debtor': '10000',
            'creditor': ' 0', 'remaining': '70000000'
        },
        {
            'accountNumber': 8465215749, 'history': '1400/05/01'
            , 'branchName': 'شوش', 'yektaCode': '100000853',
            'transactionTypeCode': '', 'docDes': '312', 'debtor': '100000',
            'creditor': '0 ', 'remaining': '70000000'
        },
        {
            'accountNumber': 3256157895, 'history': '1400/05/01'
            , 'branchName': 'نلسون ماندلا', 'yektaCode': '1000003373',
            'transactionTypeCode': '', 'docDes': '312', 'debtor': '10000',
            'creditor': '0 ', 'remaining': '70000000'
        },
        {
            'accountNumber': 7416581213, 'history': '1400/05/01'
            , 'branchName': 'سعدی', 'yektaCode': '1000003924',
            'transactionTypeCode': '', 'docDes': '312', 'debtor': '10000',
            'creditor': ' 0', 'remaining': '70000000'
        },
        {
            'accountNumber': 8742154565, 'history': '1400/05/01'
            , 'branchName': 'سئول', 'yektaCode': '10000024',
            'transactionTypeCode': '', 'docDes': '312', 'debtor': '10000',
            'creditor': ' 0', 'remaining': '70000000'
        },
        {
            'accountNumber': 1525844572, 'history': '1400/05/01'
            , 'branchName': 'صادقیه', 'yektaCode': '100000209',
            'transactionTypeCode': '', 'docDes': '312', 'debtor': '10000',
            'creditor': ' 0', 'remaining': '70000000'
        },
        {
            'accountNumber': 8754788621, 'history': '1400/05/01'
            , 'branchName': 'توحید', 'yektaCode': '100000310',
            'transactionTypeCode': '', 'docDes': '312', 'debtor': '10000',
            'creditor': '0 ', 'remaining': '70000000'
        },
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

}

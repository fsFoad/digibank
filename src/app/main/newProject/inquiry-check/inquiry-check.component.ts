import {Component, OnInit} from '@angular/core';
import {Constants} from '../../shared/constants/Constants';

@Component({
    selector: 'app-inquiry-check',
    templateUrl: './inquiry-check.component.html',
    styleUrls: ['./inquiry-check.component.scss']
})
export class InquiryCheckComponent implements OnInit {
  acItems = Constants.acItems;
    tableFlag = false;
    fsList: {
        accountNumber: number, history: string, branchName: string,
        yektaCode: string, dateDue: string, beneficiary: string, check: string,
        amounts: string, doc: string, amount: number, creditor: string
    }[] = [
        {
            'accountNumber': 1574655249, 'history': '1404/05/01',
            'branchName': 'تجریش', 'yektaCode': '10000022',
            'dateDue': '423523452', 'beneficiary': 'علی محمدی', 'check': '2222589',
            'amounts': ' 6785656566000', 'doc': '5666', 'amount': 5843000000, 'creditor': '10000000'
        },
        {
            'accountNumber': 7541589521, 'history': '1404/05/09'
            , 'branchName': 'بازار', 'yektaCode': '10000022',
            'dateDue': '23423443', 'beneficiary': 'سینا کریمی', 'check': '2222589',
            'amounts': ' 356676345', 'doc': '5666', 'amount': 3840000000, 'creditor': '10000000'
        },
        {
            'accountNumber': 7548621548, 'history': '1404/05/05'
            , 'branchName': 'دولت', 'yektaCode': '10000022',
            'dateDue': '4542234', 'beneficiary': 'سامان کاشانی', 'check': '2222589',
            'amounts': ' 786745656', 'doc': '5666', 'amount': 4251000000, 'creditor': '10000000'
        },
        {
            'accountNumber': 1548254962, 'history': '1404/05/03'
            , 'branchName': 'گاندی', 'yektaCode': '10000022',
            'dateDue': '456456345', 'beneficiary': 'عماد همتی', 'check': '2222589',
            'amounts': '567678565', 'doc': '5666', 'amount': 7000000000, 'creditor': '10000000'
        },
        {
            'accountNumber': 8465215749, 'history': '1404/05/04'
            , 'branchName': 'شوش', 'yektaCode': '10000022',
            'dateDue': '34534624', 'beneficiary': 'فرید ترابی', 'check': '2222589',
            'amounts': '5645765', 'doc': '5666', 'amount': 5460000000, 'creditor': '10000000'
        },
        {
            'accountNumber': 3256157895, 'history': '1404/05/07'
            , 'branchName': 'نلسون ماندلا', 'yektaCode': '10000022',
            'dateDue': '34556665', 'beneficiary': 'کامیار کاظمی', 'check': '2222589',
            'amounts': '789677565', 'doc': '5666', 'amount': 6300000000, 'creditor': '10000000'
        },
        {
            'accountNumber': 7416581213, 'history': '1404/05/11'
            , 'branchName': 'سعدی', 'yektaCode': '10000022',
            'dateDue': '35656735434', 'beneficiary': 'عرفان حشمتی', 'check': '2222589',
            'amounts': '3545643467', 'doc': '5666', 'amount': 8900000000, 'creditor': '10000000'
        },
        {
            'accountNumber': 8742154565, 'history': '1404/05/12'
            , 'branchName': 'سئول', 'yektaCode': '10000022',
            'dateDue': '3453456567', 'beneficiary': 'رستم حبیبی', 'check': '2222589',
            'amounts': ' 4323633', 'doc': '5666', 'amount': 6350000000, 'creditor': '10000000'
        },
        {
            'accountNumber': 1525844572, 'history': '1404/05/01'
            , 'branchName': 'صادقیه', 'yektaCode': '10000022',
            'dateDue': '34534535676', 'beneficiary': 'حبیب حسینی', 'check': '2222589',
            'amounts': '346457658', 'doc': '5666', 'amount': 7000000000, 'creditor': '10000000'
        },
        {
            'accountNumber': 8754788621, 'history': '1404/05/14'
            , 'branchName': 'توحید', 'yektaCode': '10000022',
            'dateDue': '5645675656', 'beneficiary': 'کریم حسنی', 'check': '2222589',
            'amounts': ' 24365768', 'doc': '5666', 'amount': 5100000000, 'creditor': '10000000'
        },
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

}

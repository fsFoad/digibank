import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-report-ghabz',
    templateUrl: './report-ghabz.component.html',
    styleUrls: ['./report-ghabz.component.scss']
})
export class ReportGhabzComponent implements OnInit {
    tableFlag = false;
    fsList: {
        accountNumber: number, history: string, billingID: string,
        paymentCode: string, referralNumber: string, beneficiary: string, status: string,
        transactionYektaCode: string, boxTranslate: string, amount: number
    }[] = [
        {
            'accountNumber': 1574655249, 'history': '1400/05/01',
            'billingID': '354153434', 'paymentCode': '3223345',
            'referralNumber': '423523452', 'beneficiary': '', 'status': '',
            'transactionYektaCode': ' 6785656566', 'boxTranslate': ' ', 'amount': 7000000 
        },
        {
            'accountNumber': 7541589521, 'history': '1400/05/01'
            , 'billingID': '354153434', 'paymentCode': '35454545',
            'referralNumber': '23423443', 'beneficiary': '', 'status': '',
            'transactionYektaCode': ' 356676345', 'boxTranslate': '', 'amount': 7000000 
        },
        {
            'accountNumber': 7548621548, 'history': '1400/05/01'
            , 'billingID': '354153434', 'paymentCode': '3587545',
            'referralNumber': '4542234', 'beneficiary': '', 'status': '',
            'transactionYektaCode': ' 786745656', 'boxTranslate': '', 'amount': 7000000 
        },
        {
            'accountNumber': 1548254962, 'history': '1400/05/01'
            , 'billingID': '354153434', 'paymentCode': '3587445',
            'referralNumber': '456456345', 'beneficiary': '', 'status': '',
            'transactionYektaCode': '567678565', 'boxTranslate': '', 'amount': 7000000 
        },
        {
            'accountNumber': 8465215749, 'history': '1400/05/01'
            , 'billingID': '354153434', 'paymentCode': '352345',
            'referralNumber': '34534624', 'beneficiary': '', 'status': '',
            'transactionYektaCode': '5645765', 'boxTranslate': '', 'amount': 7000000 
        },
        {
            'accountNumber': 3256157895, 'history': '1400/05/01'
            , 'billingID': '354153434', 'paymentCode': '343315',
            'referralNumber': '34556665', 'beneficiary': '', 'status': '',
            'transactionYektaCode': '789677565', 'boxTranslate': '', 'amount': 7000000 
        },
        {
            'accountNumber': 7416581213, 'history': '1400/05/01'
            , 'billingID': '354153434', 'paymentCode': '345323545',
            'referralNumber': '35656735434', 'beneficiary': '', 'status': '',
            'transactionYektaCode': '3545643467', 'boxTranslate': '', 'amount': 7000000 
        },
        {
            'accountNumber': 8742154565, 'history': '1400/05/01'
            , 'billingID': '354153434', 'paymentCode': '34234543',
            'referralNumber': '3453456567', 'beneficiary': '', 'status': '',
            'transactionYektaCode': ' 4323633', 'boxTranslate': '', 'amount': 7000000 
        },
        {
            'accountNumber': 1525844572, 'history': '1400/05/01'
            , 'billingID': '354153434', 'paymentCode': '32145',
            'referralNumber': '34534535676', 'beneficiary': '', 'status': '',
            'transactionYektaCode': '346457658', 'boxTranslate': '', 'amount': 7000000 
        },
        {
            'accountNumber': 8754788621, 'history': '1400/05/01'
            , 'billingID': '354153434', 'paymentCode': '3545445',
            'referralNumber': '5645675656', 'beneficiary': '', 'status': '',
            'transactionYektaCode': ' 24365768', 'boxTranslate': '', 'amount': 7000000 
        },
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

}

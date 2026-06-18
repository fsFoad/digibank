import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-report-paya-bank',
    templateUrl: './report-paya-bank.component.html',
    styleUrls: ['./report-paya-bank.component.scss']
})
export class ReportPayaBankComponent implements OnInit {
    tableFlag = false;
    fsList: {
        accountNumber: number, history: string, numberTranslate: string,
        yektaCode: string, docDes: string, RemittanceType: string, status: string,
        amounts: number, details: string
    }[] = [
        {
            'accountNumber': 1574655249, 'history': '1400/05/01',
            'numberTranslate': '354153434', 'yektaCode': '3223345',
            'docDes': '', 'RemittanceType': '', 'status': 'فعال',
            'amounts': 2225543, 'details': ' ' 
        },
        {
            'accountNumber': 7541589521, 'history': '1400/05/01'
            , 'numberTranslate': '354153434', 'yektaCode': '35454545',
            'docDes': '', 'RemittanceType': '', 'status': 'فعال',
            'amounts': 2225543, 'details': '' 
        },
        {
            'accountNumber': 7548621548, 'history': '1400/05/01'
            , 'numberTranslate': '354153434', 'yektaCode': '3587545',
            'docDes': '', 'RemittanceType': '', 'status': 'فعال',
            'amounts': 2225543, 'details': '' 
        },
        {
            'accountNumber': 1548254962, 'history': '1400/05/01'
            , 'numberTranslate': '354153434', 'yektaCode': '3587445',
            'docDes': '', 'RemittanceType': '', 'status': 'فعال',
            'amounts': 2225543, 'details': '' 
        },
        {
            'accountNumber': 8465215749, 'history': '1400/05/01'
            , 'numberTranslate': '354153434', 'yektaCode': '352345',
            'docDes': '', 'RemittanceType': '', 'status': 'فعال',
            'amounts': 2225543, 'details': '' 
        },
        {
            'accountNumber': 3256157895, 'history': '1400/05/01'
            , 'numberTranslate': '354153434', 'yektaCode': '343315',
            'docDes': '', 'RemittanceType': '', 'status': 'فعال',
            'amounts': 2225543, 'details': '' 
        },
        {
            'accountNumber': 7416581213, 'history': '1400/05/01'
            , 'numberTranslate': '354153434', 'yektaCode': '345323545',
            'docDes': '', 'RemittanceType': '', 'status': 'فعال',
            'amounts': 2225543, 'details': '' 
        },
        {
            'accountNumber': 8742154565, 'history': '1400/05/01'
            , 'numberTranslate': '354153434', 'yektaCode': '34234543',
            'docDes': '', 'RemittanceType': '', 'status': 'فعال',
            'amounts': 2225543, 'details': '' 
        },
        {
            'accountNumber': 1525844572, 'history': '1400/05/01'
            , 'numberTranslate': '354153434', 'yektaCode': '32145',
            'docDes': '', 'RemittanceType': '', 'status': 'فعال',
            'amounts': 2225543, 'details': '' 
        },
        {
            'accountNumber': 8754788621, 'history': '1400/05/01'
            , 'numberTranslate': '354153434', 'yektaCode': '3545445',
            'docDes': '', 'RemittanceType': '', 'status': 'فعال',
            'amounts': 2225543, 'details': '' 
        },
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

}

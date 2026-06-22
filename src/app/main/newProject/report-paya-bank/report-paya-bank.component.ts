import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

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
            'accountNumber': 1574655249, 'history': '1404/05/01',
            'numberTranslate': '354153434', 'yektaCode': '3223345',
            'docDes': '', 'RemittanceType': '', 'status': 'فعال',
            'amounts': 2225543000, 'details': ' '
        },
        {
            'accountNumber': 7541589521, 'history': '1404/06/08'
            , 'numberTranslate': '354153434', 'yektaCode': '35454545',
            'docDes': '', 'RemittanceType': '', 'status': 'فعال',
            'amounts': 2666543000, 'details': ''
        },
        {
            'accountNumber': 7548621548, 'history': '1404/04/01'
            , 'numberTranslate': '354153434', 'yektaCode': '3587545',
            'docDes': '', 'RemittanceType': '', 'status': 'فعال',
            'amounts': 2657543000, 'details': ''
        },
        {
            'accountNumber': 1548254962, 'history': '1404/04/10'
            , 'numberTranslate': '354153434', 'yektaCode': '3587445',
            'docDes': '', 'RemittanceType': '', 'status': 'فعال',
            'amounts': 2263243000, 'details': ''
        },
        {
            'accountNumber': 8465215749, 'history': '1404/05/13'
            , 'numberTranslate': '354153434', 'yektaCode': '352345',
            'docDes': '', 'RemittanceType': '', 'status': 'فعال',
            'amounts': 2999540030, 'details': ''
        },
        {
            'accountNumber': 3256157895, 'history': '1404/08/15'
            , 'numberTranslate': '354153434', 'yektaCode': '343315',
            'docDes': '', 'RemittanceType': '', 'status': 'فعال',
            'amounts': 2923310003, 'details': ''
        },
        {
            'accountNumber': 7416581213, 'history': '1404/05/21'
            , 'numberTranslate': '354153434', 'yektaCode': '345323545',
            'docDes': '', 'RemittanceType': '', 'status': 'فعال',
            'amounts': 2875054030, 'details': ''
        },
        {
            'accountNumber': 8742154565, 'history': '1404/04/29'
            , 'numberTranslate': '354153434', 'yektaCode': '34234543',
            'docDes': '', 'RemittanceType': '', 'status': 'فعال',
            'amounts': 1202505063, 'details': ''
        },
        {
            'accountNumber': 1525844572, 'history': '1404/06/06'
            , 'numberTranslate': '354153434', 'yektaCode': '32145',
            'docDes': '', 'RemittanceType': '', 'status': 'فعال',
            'amounts': 2665500043, 'details': ''
        },
        {
            'accountNumber': 8754788621, 'history': '1404/05/01'
            , 'numberTranslate': '354153434', 'yektaCode': '3545445',
            'docDes': '', 'RemittanceType': '', 'status': 'فعال',
            'amounts': 2985500043, 'details': ''
        },
    ];

    constructor(private router: Router) { }

    ngOnInit(): void {
    }


  goHome(): void {
    this.router.navigate(['/']);
  }
}

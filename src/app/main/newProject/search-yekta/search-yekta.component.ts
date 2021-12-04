import {Component, OnInit} from '@angular/core';
import { Constants } from 'app/main/shared/constants/Constants';

@Component({
    selector: 'app-search-yekta',
    templateUrl: './search-yekta.component.html',
    styleUrls: ['./search-yekta.component.scss']
})
export class SearchYektaComponent implements OnInit {
    tableFlag = false;
    fsList: {
        accountNumber: number, history: string, branchName: string,
        yektaCode: string, dateDue: string, Depositor: string, status: string,
        amounts: string, docNumber: string, amount: number, creditor: string
    }[] = [
        {
            'accountNumber': 1574655249, 'history': '1400/02/01',
            branchName: '', 'yektaCode': '10000022',
            'dateDue': '423523452', 'Depositor': 'علی محمدی', 'status': '2222589',
            'amounts': ' 6785656566', 'docNumber': '5666', 'amount': 7000000, 'creditor': '10000'
        },
        {
            'accountNumber': 7541589521, 'history': '1400/04/21'
            , branchName: '', 'yektaCode': '10000023',
            'dateDue': '23423443', 'Depositor': 'سینا کریمی', 'status': '2222589',
            'amounts': ' 356676345', 'docNumber': '5667', 'amount': 7000000, 'creditor': '100000'
        },
        {
            'accountNumber': 7548621548, 'history': '1400/05/11'
            , branchName: '', 'yektaCode': '10000024',
            'dateDue': '4542234', 'Depositor': 'سامان کاشانی', 'status': '2222589',
            'amounts': ' 786745656', 'docNumber': '5668', 'amount': 7000000, 'creditor': '150000'
        },
        {
            'accountNumber': 1548254962, 'history': '1400/07/19'
            , branchName: '', 'yektaCode': '10000025',
            'dateDue': '456456345', 'Depositor': 'عماد همتی', 'status': '2222589',
            'amounts': '567678565', 'docNumber': '5669', 'amount': 7000000, 'creditor': '90000'
        },
        {
            'accountNumber': 8465215749, 'history': '1400/09/01'
            , branchName: '', 'yektaCode': '10000022',
            'dateDue': '34534624', 'Depositor': 'فرید ترابی', 'status': '2222589',
            'amounts': '5645765', 'docNumber': '5670', 'amount': 7000000, 'creditor': '80000'
        },
    ].map((x,i)=>({...x, branchName: Constants.branchNames[i]}));

    constructor() {
    }

    ngOnInit(): void {
    }

}

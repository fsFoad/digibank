import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-check-bardasht',
  templateUrl: './report-check-bardasht.component.html',
  styleUrls: ['./report-check-bardasht.component.scss']
})
export class ReportCheckBardashtComponent implements OnInit {
    tableFlag = false;
    fsList: {
        accountNumber: number, history: string, branchCode: string,
        yektaCode: string, dateDue: string, beneficiary: string, TransactionTypeCode: string,
        amounts: string, docDes: string, amount: number, creditor: string
    }[] = [
        {
            'accountNumber': 1574655249, 'history': '1400/05/01',
            'branchCode': '  85456', 'yektaCode': '10000022',
            'dateDue': '423523452', 'beneficiary': 'علی محمدی', 'TransactionTypeCode': '2222589',
            'amounts':  ' 6785656566', 'docDes': '5666', 'amount': 7000000, 'creditor': '10000'
        },
        {
            'accountNumber': 7541589521, 'history': '1400/05/01'
            , 'branchCode': '  85456', 'yektaCode': '10000022',
            'dateDue': '23423443', 'beneficiary': 'سینا کریمی', 'TransactionTypeCode': '2222589',
            'amounts':  ' 356676345', 'docDes': '5666', 'amount': 7000000, 'creditor': '10000'
        },
        {
            'accountNumber': 7548621548, 'history': '1400/05/01'
            , 'branchCode': '  85456', 'yektaCode': '10000022',
            'dateDue': '4542234', 'beneficiary': 'سامان کاشانی', 'TransactionTypeCode': '2222589',
            'amounts':  ' 786745656', 'docDes': '5666', 'amount': 7000000, 'creditor': '10000'
        },
        {
            'accountNumber': 1548254962, 'history': '1400/05/01'
            , 'branchCode': '  85456', 'yektaCode': '10000022',
            'dateDue': '456456345', 'beneficiary': 'عماد همتی', 'TransactionTypeCode': '2222589',
            'amounts':  '567678565', 'docDes': '5666', 'amount': 7000000, 'creditor': '10000'
        },
        {
            'accountNumber': 8465215749, 'history': '1400/05/01'
            , 'branchCode': '  85456', 'yektaCode': '10000022',
            'dateDue': '34534624', 'beneficiary': 'فرید ترابی', 'TransactionTypeCode': '2222589',
            'amounts':  '5645765', 'docDes': '5666', 'amount': 7000000, 'creditor': '10000'
        },
        {
            'accountNumber': 3256157895, 'history': '1400/05/01'
            , 'branchCode': '  85456', 'yektaCode': '10000022',
            'dateDue': '34556665', 'beneficiary': 'کامیار کاظمی', 'TransactionTypeCode': '2222589',
            'amounts':  '789677565', 'docDes': '5666', 'amount': 7000000, 'creditor': '10000'
        },
        {
            'accountNumber': 7416581213, 'history': '1400/05/01'
            , 'branchCode': '  85456', 'yektaCode': '10000022',
            'dateDue': '35656735434', 'beneficiary': 'عرفان حشمتی', 'TransactionTypeCode': '2222589',
            'amounts':  '3545643467', 'docDes': '5666', 'amount': 7000000, 'creditor': '10000'
        },
        {
            'accountNumber': 8742154565, 'history': '1400/05/01'
            , 'branchCode': '  85456', 'yektaCode': '10000022',
            'dateDue': '3453456567', 'beneficiary': 'رستم حبیبی', 'TransactionTypeCode': '2222589',
            'amounts':  ' 4323633', 'docDes': '5666', 'amount': 7000000, 'creditor': '10000'
        },
        {
            'accountNumber': 1525844572, 'history': '1400/05/01'
            , 'branchCode': '  85456', 'yektaCode': '10000022',
            'dateDue': '34534535676', 'beneficiary': 'حبیب حسینی', 'TransactionTypeCode': '2222589',
            'amounts':  '346457658', 'docDes': '5666', 'amount': 7000000, 'creditor': '10000'
        },
        {
            'accountNumber': 8754788621, 'history': '1400/05/01'
            , 'branchCode': '  85456', 'yektaCode': '10000022',
            'dateDue': '5645675656', 'beneficiary': 'کریم حسنی', 'TransactionTypeCode': '2222589',
            'amounts':  ' 24365768', 'docDes': '5666', 'amount': 7000000, 'creditor': '10000'
        },
    ];
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill2',
  templateUrl: './bill2.component.html',
  styleUrls: ['./bill2.component.scss']
})
export class Bill2Component implements OnInit {
  tableFlag = false;
  fsList: {
    accountNumber: number, history: string, branchCode: string,
    yektaCode: string, dateDue: string, depositor: string, check: string,
    amounts: string, doc: string, amount: number, creditor: string
  }[] = [
    {
      'accountNumber': 1574655249, 'history': '1400/05/01',
      'branchCode': '  85456', 'yektaCode': '10000022',
      'dateDue': '423523452', 'depositor': 'علی محمدی', 'check': '2222589',
      'amounts': ' 6785656566', 'doc': '5666', 'amount': 7000000, 'creditor': '10000'
    },
    {
      'accountNumber': 7541589521, 'history': '1400/05/01'
      , 'branchCode': '  85456', 'yektaCode': '10000022',
      'dateDue': '23423443', 'depositor': 'سینا کریمی', 'check': '2222589',
      'amounts': ' 356676345', 'doc': '5666', 'amount': 7000000, 'creditor': '10000'
    },
    {
      'accountNumber': 7548621548, 'history': '1400/05/01'
      , 'branchCode': '  85456', 'yektaCode': '10000022',
      'dateDue': '4542234', 'depositor': 'سامان کاشانی', 'check': '2222589',
      'amounts': ' 786745656', 'doc': '5666', 'amount': 7000000, 'creditor': '10000'
    },
    {
      'accountNumber': 1548254962, 'history': '1400/05/01'
      , 'branchCode': '  85456', 'yektaCode': '10000022',
      'dateDue': '456456345', 'depositor': 'عماد همتی', 'check': '2222589',
      'amounts': '567678565', 'doc': '5666', 'amount': 7000000, 'creditor': '10000'
    },
    {
      'accountNumber': 8465215749, 'history': '1400/05/01'
      , 'branchCode': '  85456', 'yektaCode': '10000022',
      'dateDue': '34534624', 'depositor': 'فرید ترابی', 'check': '2222589',
      'amounts': '5645765', 'doc': '5666', 'amount': 7000000, 'creditor': '10000'
    },
    {
      'accountNumber': 3256157895, 'history': '1400/05/01'
      , 'branchCode': '  85456', 'yektaCode': '10000022',
      'dateDue': '34556665', 'depositor': 'کامیار کاظمی', 'check': '2222589',
      'amounts': '789677565', 'doc': '5666', 'amount': 7000000, 'creditor': '10000'
    },
    {
      'accountNumber': 7416581213, 'history': '1400/05/01'
      , 'branchCode': '  85456', 'yektaCode': '10000022',
      'dateDue': '35656735434', 'depositor': 'عرفان حشمتی', 'check': '2222589',
      'amounts': '3545643467', 'doc': '5666', 'amount': 7000000, 'creditor': '10000'
    },
    {
      'accountNumber': 8742154565, 'history': '1400/05/01'
      , 'branchCode': '  85456', 'yektaCode': '10000022',
      'dateDue': '3453456567', 'depositor': 'رستم حبیبی', 'check': '2222589',
      'amounts': ' 4323633', 'doc': '5666', 'amount': 7000000, 'creditor': '10000'
    },
    {
      'accountNumber': 1525844572, 'history': '1400/05/01'
      , 'branchCode': '  85456', 'yektaCode': '10000022',
      'dateDue': '34534535676', 'depositor': 'حبیب حسینی', 'check': '2222589',
      'amounts': '346457658', 'doc': '5666', 'amount': 7000000, 'creditor': '10000'
    },
    {
      'accountNumber': 8754788621, 'history': '1400/05/01'
      , 'branchCode': '  85456', 'yektaCode': '10000022',
      'dateDue': '5645675656', 'depositor': 'کریم حسنی', 'check': '2222589',
      'amounts': ' 24365768', 'doc': '5666', 'amount': 7000000, 'creditor': '10000'
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}

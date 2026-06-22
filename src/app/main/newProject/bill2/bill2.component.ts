import { Component, OnInit } from '@angular/core';
import { Constants } from '../../shared/constants/Constants';

@Component({
  selector: 'app-bill2',
  templateUrl: './bill2.component.html',
  styleUrls: ['./bill2.component.scss']
})
export class Bill2Component implements OnInit {
  acItems = Constants.acItems;
  organizationalUnit = Constants.organizationalUnit;
  tableFlag = false;
  fsList: {
    accountNumber: string, history: string, branchName: string,
    yektaCode: string, dateDue: string, depositor: string, check: string,
    amounts: string, doc: string, amount: number, creditor: string
  }[] = [
    {
      'accountNumber': "  340-1000000145-65", 'history': '1404/01/01',
      branchName: '', 'yektaCode': '0',
      'dateDue': '423523452', 'depositor': 'علی محمدی', 'check': '2222589',
      'amounts': ' 6785656566', 'doc': '5666', 'amount': 10000000000, 'creditor': '10000000'
    },
    {
      'accountNumber': "340-1000000145-65", 'history': '1404/02/11'
      , branchName: '', 'yektaCode': '10000023',
      'dateDue': '23423443', 'depositor': 'سینا کریمی', 'check': '2222590',
      'amounts': ' 356676345', 'doc': '5667', 'amount': 7000000000, 'creditor': '30000000'
    },
    {
      'accountNumber': "340-1000000145-65", 'history': '1404/02/21'
      , branchName: '', 'yektaCode': '10000024',
      'dateDue': '4542234', 'depositor': 'سامان کاشانی', 'check': '2222591',
      'amounts': ' 786745656', 'doc': '5668', 'amount': 5000000000, 'creditor': '15000000'
    },
    {
      'accountNumber': "340-1000000145-65", 'history': '1404/04/05'
      , branchName: '', 'yektaCode': '0',
      'dateDue': '456456345', 'depositor': 'عماد همتی', 'check': '2222592',
      'amounts': '567678565', 'doc': '5669', 'amount': 25000000000, 'creditor': '55000000'
    },
    {
      'accountNumber': "440-1006580523-01", 'history': '1404/05/01'
      , branchName: '', 'yektaCode': '10000026',
      'dateDue': '34534624', 'depositor': 'فرید ترابی', 'check': '2222593',
      'amounts': '5645765', 'doc': '5670', 'amount': 1000000000, 'creditor': '60000000'
    },
    {
      'accountNumber': "340-1000000145-65", 'history': '1404/05/11'
      , branchName: '', 'yektaCode': '10000027',
      'dateDue': '34556665', 'depositor': 'کامیار کاظمی', 'check': '2222594',
      'amounts': '789677565', 'doc': '5671', 'amount': 10000000000, 'creditor': '25000000'
    },
    {
      'accountNumber': "440-1006580523-01", 'history': '1404/05/21'
      , branchName: '', 'yektaCode': '0',
      'dateDue': '35656735434', 'depositor': 'عرفان حشمتی', 'check': '2222595',
      'amounts': '3545643467', 'doc': '5672', 'amount': 5000000000, 'creditor': '15000000'
    },
    {
      'accountNumber': "440-1006580523-01", 'history': '1404/05/23'
      , branchName: '', 'yektaCode': '10000022',
      'dateDue': '34534535676', 'depositor': 'حبیب حسینی', 'check': '2222596',
      'amounts': '346457658', 'doc': '5666', 'amount': 20000000000, 'creditor': '85000000'
    },
    {
      'accountNumber': "340-1000000145-65", 'history': '1404/05/29'
      , branchName: '', 'yektaCode': '10000022',
      'dateDue': '5645675656', 'depositor': 'کریم حسنی', 'check': '2222597',
      'amounts': ' 24365768', 'doc': '5666', 'amount': 16000000000, 'creditor': '65000000'
    },
  ].map((x, i) => ({ ...x, branchName: Constants.branchNames[i] }));

  constructor() {
  }

  ngOnInit(): void {

  }

}

import { Component, OnInit } from '@angular/core';
import {Constants} from '../../shared/constants/Constants';

@Component({
  selector: 'app-soorat-hesab',
  templateUrl: './soorat-hesab.component.html',
  styleUrls: ['./soorat-hesab.component.scss']
})
export class SooratHesabComponent implements OnInit {
  showTable = false;
  acItems=Constants.acItems;
  organizationalUnit=Constants.organizationalUnit;
  tableData = getSampleTableData();

  // acItems = [
  //   { value: '', label: '54654687' },
  //   { value: '', label: '32454465' },
  //   { value: '', label: '97897978' },
  // ]
  constructor() { }

  ngOnInit(): void {
  }

}

function getSampleTableData() {
  const row = {
    accountNumber: 2323454566,
    branchName: '',
    dateOfApplication: '1399/09/09',
    depositor: 'رضا',
    transactionCode: 10000022,
    checkOrRemittance: 2222334,
    document: 5666,
    debtor: 10_000,
    creditor: 0,
    remaining: 700_000_000,
    dateOfCompletion: '1399/10/09',
    serviceTypeCode: 170,
  }

  return [
    'رضا عروجی',
    'علی دادخواه',
    'حامد کریمی',
    'امیر حاجیان',
    'محسن فریادرس',
    'امیر لطفی',
  ].map((x, i) => ({ ...row, depositor: x, branchName: Constants.branchNames[i] }))
}

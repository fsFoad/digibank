import {Component, OnInit} from '@angular/core';
import {Constants} from 'app/main/shared/constants/Constants';

@Component({
  selector: 'app-tashilat-list',
  templateUrl: './tashilat-list.component.html',
  styleUrls: ['./tashilat-list.component.scss']
})
export class TashilatListComponent implements OnInit {
  tableFlag = false;
  unitItems = Constants.organizationalUnit;
  fsList: {
    remaining: number, relevantUnit: string, branch: string,
    tashilatType: string, fileNumber: string, amount: number, date: number,
    accumulationPaymentObligation: number, installmentsPaid: number
  }[] = [
    {
      'remaining': 8465215749,
      'relevantUnit': 'شرکت هولدینگ',
      'branch': 'بازار',
      'tashilatType': 'مضاربه',
      'fileNumber': '139932-621',
      'amount': 1500000000,
      date: 13980116,
      'accumulationPaymentObligation': 220000,
      'installmentsPaid': 1000000000
    },
    {
      'remaining': 5100000,
      'relevantUnit': 'شرکت تابع1',
      'branch': 'دولت',
      'tashilatType': 'فروش اقساطی',
      'fileNumber': '139911-760',
      'amount': 1000000000,
      date: 13990424,
      'accumulationPaymentObligation': 1000000,
      'installmentsPaid': 5000000
    },
    {
      'remaining': 1548254962,
      'relevantUnit': 'شرکت تابع2',
      'branch': 'میدان آرژانتین',
      'tashilatType': 'خرید دین',
      'fileNumber': '139910-220',
      'amount': 2000000000,
      date: 13990217,
      'accumulationPaymentObligation': 0,
      'installmentsPaid': 1400000000
    },
    {
      'remaining': 643700000,
      'relevantUnit': 'شرکت تابع3',
      'branch': 'میرداماد',
      'tashilatType': 'خرید دین',
      'fileNumber': '139908-129',
      'amount': 2500000000,
      date: 14000828,
      'accumulationPaymentObligation': 0,
      'installmentsPaid': 2000000000
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}

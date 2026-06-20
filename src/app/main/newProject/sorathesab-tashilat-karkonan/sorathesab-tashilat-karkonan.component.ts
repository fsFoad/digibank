import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sorathesab-tashilat-karkonan',
  templateUrl: './sorathesab-tashilat-karkonan.component.html',
  styleUrls: ['./sorathesab-tashilat-karkonan.component.scss']
})
export class SorathesabTashilatKarkonanComponent implements OnInit {
  tableFlag = false;
  fsList: {
    remaining: number, relevantUnit: string, branch: string,
    tashilatType: string, fileNumber: string, amount: number,
    accumulationPaymentObligation: number, installmentsPaid: number
  }[] = [
    {
      'remaining': 5100000,
      'relevantUnit': 'شرکت1',
      'branch': 'دولت',
      'tashilatType': 'فروش اقساطی',
      'fileNumber': '139911-760',
      'amount': 1000000000,
      'accumulationPaymentObligation': 1000000,
      'installmentsPaid': 5000000
    },
    {
      'remaining': 1548254962,
      'relevantUnit': 'شرکت2',
      'branch': 'بانک',
      'tashilatType': 'خرید دین',
      'fileNumber': '139910-220',
      'amount': 2000000000,
      'accumulationPaymentObligation': null,
      'installmentsPaid': 1400000000
    },
    {
      'remaining': 8465215749,
      'relevantUnit': 'شرکت هلدینگ',
      'branch': 'بازار',
      'tashilatType': 'مضاربه',
      'fileNumber': '139932-621',
      'amount': 1500000000,
      'accumulationPaymentObligation':220000,
      'installmentsPaid': 1000000000
    }];
  constructor() { }

  ngOnInit(): void {
  }

}

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-billing-bon-card',
  templateUrl: './billing-bon-card.component.html',
  styleUrls: ['./billing-bon-card.component.scss']
})
export class BillingBonCardComponent implements OnInit {
  tableFlag = false;
  fsList: {
    accountNumber: string, history: string, branchName: string,
    yektaCode: string, dateDue: string, transactionDes: string, check: string,
    dateDone: string, doc: string, amount: number, creditor: string
  }[] = [
    {
      'accountNumber': '240-1000000589-25', 'history': '1400/02/15',
      'branchName': 'دولت', 'yektaCode': '10000022',
      'dateDue': '423523452', 'transactionDes': 'پوز', 'check': '2222589',
      'dateDone': '1400/02/30', 'doc': '5666', 'amount': 23000000, 'creditor': '10000000'
    },
    {
      'accountNumber': '340-1000000145-65', 'history': '1400/03/25'
      , 'branchName': 'بازار', 'yektaCode': '10000022',
      'dateDue': '23423443', 'transactionDes': 'خودپرداز', 'check': '2222590',
      'dateDone': '1400/03/29', 'doc': '5667', 'amount': 110000000, 'creditor': '81000000'
    },
    {
      'accountNumber': '340-1000000189-26', 'history': '1400/03/30'
      , 'branchName': 'تجریش', 'yektaCode': '10000022',
      'dateDue': '4542234', 'transactionDes': 'برداشت نقدی', 'check': '2222591',
      'dateDone': '1400/04/06', 'doc': '5668', 'amount': 95000000, 'creditor': '52000000'
    },
    {
      'accountNumber': '440-1006580523-01', 'history': '1400/05/09'
      , 'branchName': 'دولت', 'yektaCode': '10000022',
      'dateDue': '456456345', 'transactionDes': 'انتقال وجه', 'check': '2222592',
      'dateDone': '1400/05/24', 'doc': '5669', 'amount': 51000000, 'creditor': '23000000'
    },
    // {
    //     'accountNumber': 8465215749, 'history': '1400/05/01'
    //     , 'branchName': 'تجریش', 'yektaCode': '10000022',
    //     'dateDue': '34534624', 'transactionDes': 'انتقال وجه', 'check': '2222589',
    //     'amounts': '5645765', 'doc': '5666', 'amount': 7000000, 'creditor': '10000'
    // },
    // {
    //     'accountNumber': 3256157895, 'history': '1400/05/01'
    //     , 'branchName': 'بازار', 'yektaCode': '10000022',
    //     'dateDue': '34556665', 'transactionDes': 'برداشت نقدی', 'check': '2222589',
    //     'amounts': '789677565', 'doc': '5666', 'amount': 7000000, 'creditor': '10000'
    // },
    // {
    //     'accountNumber': 7416581213, 'history': '1400/05/01'
    //     , 'branchName': 'رسالت', 'yektaCode': '10000022',
    //     'dateDue': '35656735434', 'transactionDes': 'انتقال وجه', 'check': '2222589',
    //     'amounts': '3545643467', 'doc': '5666', 'amount': 7000000, 'creditor': '10000'
    // },
    // {
    //     'accountNumber': 8742154565, 'history': '1400/05/01'
    //     , 'branchName': 'پاسداران', 'yektaCode': '10000022',
    //     'dateDue': '3453456567', 'transactionDes': 'انتقال وجه', 'check': '2222589',
    //     'amounts': ' 4323633', 'doc': '5666', 'amount': 7000000, 'creditor': '10000'
    // },
    // {
    //     'accountNumber': 1525844572, 'history': '1400/05/01'
    //     , 'branchName': 'الهیه', 'yektaCode': '10000022',
    //     'dateDue': '34534535676', 'transactionDes': 'برداشت نقدی', 'check': '2222589',
    //     'amounts': '346457658', 'doc': '5666', 'amount': 7000000, 'creditor': '10000'
    // },
    // {
    //     'accountNumber': 8754788621, 'history': '1400/05/01'
    //     , 'branchName': 'آفریقا', 'yektaCode': '10000022',
    //     'dateDue': '5645675656', 'transactionDes': 'انتقال وجه', 'check': '2222589',
    //     'amounts': ' 24365768', 'doc': '5666', 'amount': 7000000, 'creditor': '10000'
    // },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}

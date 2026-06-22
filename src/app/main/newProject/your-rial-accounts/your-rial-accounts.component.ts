import { Component, OnInit } from '@angular/core';
import { Constants } from 'app/main/shared/constants/Constants';

@Component({
  selector: 'app-your-rial-accounts',
  templateUrl: './your-rial-accounts.component.html',
  styleUrls: ['./your-rial-accounts.component.scss']
})
export class YourRialAccountsComponent implements OnInit {
  accounts = Constants.acSummaries;
  level1Rows: L1Row[] = [];
  level1Loading = false;
  constructor() { }

  ngOnInit(): void {
    this.level1Loading = true;
    setTimeout(() => {
      this.level1Rows = createSampleL1Rows();
      this.level1Loading = false;
    }, 500);
  }
  accountDialogVisible = false;
  selectedAccount: any;

  showAccount(account: any): void {
    this.selectedAccount = account;
    this.accountDialogVisible = true;
  }
  confirm(): void {

  }
}
function createSampleL1Rows(): L1Row[] {
  return [
    ['11', 'حساب های بانک ملت'],
    ['12', 'حساب های بانک ملی'],
    ['21', 'حساب های بانک سامان'],
    ['22', 'حساب های بانک پاسارگاد'],
  ].map(bank => ({
    code: bank[0],
    title: bank[1],

    rows: [
      {
        code: `${bank[0]}01`,
        title: 'حساب های درآمدی',

        rows: [
          Constants.acSummaries[0],
          Constants.acSummaries[1]
        ]
      },

      {
        code: `${bank[0]}02`,
        title: 'حساب های هزینه ای',

        rows: [
          Constants.acSummaries[2],
          Constants.acSummaries[3]
        ]
      }
    ]
  }));

}


interface L1Row {
  code: string;
  title: string;
}
interface AccountRow {
  title: string;
  accountNumber: string;
  balance: number;
  blockedAmount: number;
  dateOfLastTurnover: number;
  openingBranch: string;
  openingDate: number;
}

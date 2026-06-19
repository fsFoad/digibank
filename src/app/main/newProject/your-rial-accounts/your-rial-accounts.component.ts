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
    }, 1000);
  }
  confirm(): void {

  }
}
function createSampleL1Rows(): L1Row[] {
  return [
    ['11', 'حساب های بانک ملت'],
    ['12', 'حساب های بانک ملی'],
    ['21', 'حساب های بانک سامان'],
  ].map(bank => ({
    code: bank[0],
    title: bank[1],

    rows: [
      {
        code: `${bank[0]}01`,
        title: 'حساب های درآمدی',

        rows: [
          {
            code: `${bank[0]}0101`,
            title: 'کارمزد خدمات بانکی'
          },
          {
            code: `${bank[0]}0102`,
            title: 'درآمد تسهیلات'
          },
          {
            code: `${bank[0]}0103`,
            title: 'درآمد صدور ضمانت نامه'
          }
        ]
      },

      {
        code: `${bank[0]}02`,
        title: 'حساب های هزینه ای',

        rows: [
          {
            code: `${bank[0]}0201`,
            title: 'هزینه حقوق و دستمزد'
          },
          {
            code: `${bank[0]}0202`,
            title: 'هزینه اجاره شعب'
          },
          {
            code: `${bank[0]}0203`,
            title: 'هزینه نگهداری سامانه ها'
          }
        ]
      }
    ]
  }));
}


interface L1Row {
  code: string;
  title: string;
}

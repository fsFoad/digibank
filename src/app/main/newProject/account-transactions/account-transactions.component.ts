import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

interface L1Row {
  code: string;
  title: string;
}

@Component({
  selector: 'app-account-transactions',
  templateUrl: './account-transactions.component.html',
  styleUrls: ['./account-transactions.component.scss']
})
export class AccountTransactionsComponent implements OnInit {
  level1Rows: L1Row[] = [];
  level1Loading = false;
  form: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      billingPeriod: ['customRange'],
      fromDate: [''],
      toDate: [''],
      active: [false],
      nature: ['not-important'],
    });
  }

  ngOnInit(): void {
  }

  confirm(): void {
    this.level1Loading = true;
    setTimeout(() => {
      this.level1Rows = createSampleL1Rows();
      this.level1Loading = false;
    }, 1000);
  }
}
function createSampleL1Rows(): L1Row[] {
  return [
    ['11', 'دارایی‌های جاری'],
    ['12', 'دارایی‌های غیر جاری'],
    ['21', 'بدهی‌های جاری'],
    ['22', 'بدهی‌های غیر جاری'],
    ['31', 'حقوق صاحبان سهام'],
    ['41', 'فروش و درآمدها'],
    ['51', 'بهای تمام شده کالای فروش رفته'],
    ['61', 'هزینه‌های فعالیت'],
    ['62', 'سایر هزینه‌ها و درآمدهای غیر عملیاتی'],
    ['91', 'حساب‌های انتظامی'],
  ].map(x => ({
    code: x[0],
    title: x[1],
    rows: [0, 1, 2].map(y => ({
      code: `${x[0]}${1000 + y}`,
      title: `sub title ${y + 1}`,
      rows: [0, 1, 2].map(z => ({
        code: `${x[0]}${1000 + y}${1000 + z}`,
        title: `sub sub title ${z + 1}`,
      })),
    })),
  }));
}


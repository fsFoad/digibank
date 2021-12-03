import { Component, OnInit } from '@angular/core';

interface Page {
  page: number;
  first: number;
  rows: number;
  pageCount: number;
}

@Component({
  selector: 'app-internet-remittance-cartable',
  templateUrl: './internet-remittance-cartable.component.html',
  styleUrls: ['./internet-remittance-cartable.component.scss']
})
export class InternetRemittanceCartableComponent implements OnInit {
  rows: RowType[] = [];
  constructor() {
  }

  ngOnInit(): void {
  }

  updateRows(): void {
    this.rows = this.rows.length ? this.rows : createSampleRows();
  }

  selectRow(row: RowType): void {
  }
}

interface RowType {
  temporaryTransferNumber: number;
  remittanceType: string;
  remittanceRecipient: string;
  status: string;
  sourceAccountNumber: string;
  destinationAccountNumber: string;
  amount: number;
  registrar: string;
  registrationDate: number;
}

const firstNames = ['علی رضا', 'محمد', 'مصطفی', 'رامین', 'شهاب', 'مهدی', 'حسین', 'ایرج', 'سیاوش'];
const lastNames = ['رضایی', 'سروستانی', 'کاویانی', 'کوهی', 'شکوری', 'آل منصور', 'بهجتی', 'خداپرست', 'راسخی'];
const choose = <T>(items: T[]) => items[Math.floor(Math.random() * items.length)];
const randomName = () => choose(firstNames) + ' ' + choose(lastNames);
const randomRange = (a: number, b: number) => a + Math.floor((b - a) * Math.random());
const randomNdigit = (n: number) => randomRange(Math.pow(10, n - 1), Math.pow(10, n));

function createSampleRows(): RowType[] {
  return [1, 2, 3].map(x => ({
    temporaryTransferNumber: randomNdigit(7),
    remittanceType: 'حواله اینترنتی',
    remittanceRecipient: randomName(),
    status: 'بررسی نشده',
    sourceAccountNumber: `${choose(['020', '030', '040'])}-${randomNdigit(10)}-${randomNdigit(3)}`,
    destinationAccountNumber: `${choose(['020', '030', '040'])}-${randomNdigit(10)}-${randomNdigit(3)}`,
    amount: randomNdigit(3) * (10 ** randomRange(4, 6)),
    registrar: randomName(),
    registrationDate: 14000900 + randomRange(1, 30),
  }));
}

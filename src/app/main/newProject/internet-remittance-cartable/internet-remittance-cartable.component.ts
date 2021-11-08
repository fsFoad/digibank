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
  allRows: RowType[] = createSampleRows();
  currentRows: RowType[] = [];
  currentPage: Page = { first: 0, rows: 3, pageCount: 3, page: 0 };
  constructor() {
    this.setPage(this.currentPage);
  }

  ngOnInit(): void {
  }

  setPage(page: any): void {
    console.log('setPage', page);
    this.currentPage = page;
    this.currentRows = this.allRows.slice(page.first, page.rows * page.page)
  }
}

interface RowType {
  temporaryTransferNumber: number;
  remittanceType: string;
  remittanceRecipient: string;
  status: string;
  sourceAccountNumber: number;
  destinationAccountNumber: number;
  amount: number;
  registrar: string;
  registrationDate: number;
}

const firstNames = ['علی رضا', 'محمد', 'مصطفی', 'رامین', 'شهاب', 'مهدی', 'حسین', 'ایرج', 'سیاوش']
const lastNames = ['رضایی', 'سروستانی', 'کاویانی', 'کوهی', 'شکوری', 'آل منصور', 'بهجتی', 'خداپرست', 'راسخی']
const choose = <T>(items: T[]) => items[Math.floor(Math.random() * items.length)]
const randomName = () => choose(firstNames) + ' ' + choose(lastNames)
const randomRange = (a: number, b: number) => a + Math.floor((b - a) * Math.random())
const randomNdigit = (n: number) => randomRange(Math.pow(10, n - 1), Math.pow(10, n))

function createSampleRows(): RowType[] {
  return [1, 2, 3].map(x => ({
    temporaryTransferNumber: randomNdigit(7),
    remittanceType: 'حواله اینترنتی',
    remittanceRecipient: randomName(),
    status: 'بررسی نشده',
    sourceAccountNumber: randomNdigit(10),
    destinationAccountNumber: randomNdigit(10),
    amount: 1,
    registrar: randomName(),
    registrationDate: 14000805,
  }))
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-special-payment-cartable',
  templateUrl: './special-payment-cartable.component.html',
  styleUrls: ['./special-payment-cartable.component.scss']
})
export class SpecialPaymentCartableComponent implements OnInit {
  showDetailsComponent = false;
  tableData: SpecialPaymentRow[] = [];
  selectedRow: SpecialPaymentRow | null = null;
  constructor() { }

  ngOnInit(): void {
  }

  selectRow(row: SpecialPaymentRow): void {
    this.selectedRow = row;
    this.showDetailsComponent = true;
  }

  confirm(confirm: boolean): void {
    this.showDetailsComponent = false;
  }

  refresh(): void {
    this.tableData = this.tableData.length == 0 ? createSampleRows() : this.tableData;
  }
}

export interface SpecialPaymentRow {
  temporaryRequestNumber?
  requestType?
  paymentPeriodCode?
  status?
  specialCustomer?
  accountNumber?
  amount?: number
  registrationDate?: number
  registrar?
  paymentType?
  commissionAccountNumber?
  amountOfCommission?: number
}

function createSampleRows(): SpecialPaymentRow[] {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(x => Math.random()).map(r => ({
    temporaryRequestNumber: 13000 + Math.floor(1000 * r),
    requestType: ['ثبت رکوردی پرداخت ویژه', 'ویرایش پرداخت ویژه'][Math.floor(2 * r)],
    paymentPeriodCode: r * 14041229,
    status: 'بررسی نشده',
    specialCustomer: 'کامران سینایی',
    amount: (Math.floor(1000 * r) + (Math.floor(2 * r) * 0.5)) * 10000,
    registrationDate: 1404_00_00 + (100 * Math.floor(13 * r)) + Math.floor(29 * r),
    amountOfCommission: 0,
    paymentType: 'پرداخت سود',
    commissionAccountNumber: Math.floor(10_000_000 * r),
    registrar: 'جمشیدی',
    accountNumber: 4664_0000_0000_0000 + Math.floor(1000_0000_0000 * r)
  }))
}


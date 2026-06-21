import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-paya-group-remittance-cartable',
  templateUrl: './paya-group-remittance-cartable.component.html',
  styleUrls: ['./paya-group-remittance-cartable.component.scss']
})
export class PayaGroupRemittanceCartableComponent implements OnInit {
  showTable = true;
  tableData: GroupPayaRow[] = createSampleRows();
  showDetailsComponent = false;
  selectedRow: GroupPayaRow | null = null;
  constructor() { }

  ngOnInit(): void {
  }

  selectRow(row: GroupPayaRow): void {
    this.selectedRow = row;
    this.showDetailsComponent = true;
  }

  confirm(confirm: boolean): void {
    this.showDetailsComponent = false;
  }
}


export interface GroupPayaRow {
  temporaryRemittanceNumber?
  sourceAccountNumber?
  totalAmount?
  effectiveDate?
  status?
  registrar?
  registrationDate?
}

function createSampleRows(): GroupPayaRow[] {
  return [
    {
      temporaryRemittanceNumber: 245405,
      sourceAccountNumber: 'IR81CBKU0000000000001234560101',
      totalAmount: 2_625_002_000,
      effectiveDate: 1404_07_05,
      status: 'بررسی نشده',
      registrar: 'ارژنگ دستان',
      registrationDate: 1404_07_01,
    },
    {
      temporaryRemittanceNumber: 245404,
      sourceAccountNumber: 'IR81CBKU0000000000001234560101',
      totalAmount: 2_625_002_000,
      effectiveDate: 1404_07_04,
      status: 'بررسی نشده',
      registrar: 'ارژنگ دستان',
      registrationDate: 1404_07_01,
    },
    {
      temporaryRemittanceNumber: 245403,
      sourceAccountNumber: 'IR81CBKU0000000000001234560101',
      totalAmount: 2_625_002_000,
      effectiveDate: 1404_07_03,
      status: 'بررسی نشده',
      registrar: 'ارژنگ دستان',
      registrationDate: 1404_07_01,
    },
    {
      temporaryRemittanceNumber: 245386,
      sourceAccountNumber: 'IR81CBKU0000000000001234560101',
      totalAmount: 4_000_000,
      effectiveDate: 1404_06_31,
      status: 'بررسی نشده',
      registrar: 'ارژنگ دستان',
      registrationDate: 1404_06_31,
    },
    {
      temporaryRemittanceNumber: 245130,
      sourceAccountNumber: 'IR81CBKU0000000000001234560101',
      totalAmount: 2_625_002_000,
      effectiveDate: 1404_06_01,
      status: 'بررسی نشده',
      registrar: 'ارژنگ دستان',
      registrationDate: 1404_06_31,
    },
  ]


}


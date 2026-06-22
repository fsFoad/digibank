import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paya-regular-remittance-cartable',
  templateUrl: './paya-regular-remittance-cartable.component.html',
  styleUrls: ['./paya-regular-remittance-cartable.component.scss']
})
export class PayaRegularRemittanceCartableComponent implements OnInit {
  showTable = true;
  tableData: RegularPayaRow[] = createSampleRows();
  showDetailsComponent = false;
  selectedRow: RegularPayaRow | null = null;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  selectRow(row: RegularPayaRow): void {
    this.selectedRow = row;
    this.showDetailsComponent = true;
  }

  confirm(confirm: boolean): void {
    this.showDetailsComponent = false;
  }

  goHome(): void {
    this.router.navigate(['/']);
  }
}


export interface RegularPayaRow {
  temporaryRemittanceNumber: number;
  sourceAccountNumber: number;
  destinationShabaNumber: string;
  amount: number;
  startDate: number;
  endDate: number;
  period: string;
  registrar: string;
  dateOfRegistration: number;
  about: string;
  nationalCode: string;
  beneficiaryZipCode: string;
  beneficiaryShahabCode: string;
}

function createSampleRows(): RegularPayaRow[] {
  return [
    [1245, 123123123, 'IR123123123', 2625000000, 14040631, 14040701, 'روزانه', 'رضا یعقوبی', 14040630, 'امور بازنشستگی', '', '', ''],
    [1257, 123123123, 'IR123123123', 2625000000, 14040631, 14040824, 'روزانه', 'رحیم هاشمی', 14040630, 'امور سرمایه‌گذاری و بورس', '', '', ''],
    [1258, 123123123, 'IR123123123', 1200000000, 14040631, 14040729, 'روزانه', 'رضا یعقوبی', 14040630, 'تسهیلات و تعهدات', '', '', ''],
    [1259, 123123123, 'IR123123123', 100000000, 14040631, 14040718, 'روزانه', 'رحیم هاشمی', 14040630, 'امور درمانی', '', '', ''],
    [1348, 123123123, 'IR123123123', 100000000, 14040705, 14040714, 'روزانه', 'رضا یعقوبی', 14040702, 'امور سرمایه‌گذاری و بورس', '', '', ''],
    [1349, 123123123, 'IR123123123', 1000000, 14040705, 14040707, 'روزانه', 'رضا یعقوبی', 14040702, 'هزینه عمومی و امور روزمره', '', '', ''],
    [1350, 123123123, 'IR123123123', 1000000, 14040704, 14040713, 'هفتگی', 'رحیم هاشمی', 14040703, 'تسهیلات و تعهدات', '', '', ''],
    [1363, 123123123, 'IR123123123', 1000000, 14040722, 14040727, 'روزانه', 'علیرضا حسین زاده', 14040709, 'واریز حقوق', '', '', ''],
  ].map(x => ({
    temporaryRemittanceNumber: x[0],
    sourceAccountNumber: x[1],
    destinationShabaNumber: x[2],
    amount: x[3],
    startDate: x[4],
    endDate: x[5],
    period: x[6],
    registrar: x[7],
    dateOfRegistration: x[8],
    about: x[9],
    nationalCode: x[10],
    beneficiaryZipCode: x[11],
    beneficiaryShahabCode: x[12],
  } as RegularPayaRow))
}

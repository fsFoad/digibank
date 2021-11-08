import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

  selectRow(row: RegularPayaRow): void {
    this.selectedRow = row;
    this.showDetailsComponent = true;
  }

  confirm(confirm: boolean): void {
    this.showDetailsComponent = false;
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
    [1245, 123123123, 'IR123123123', 2625000, 14000631, 14000701, 'روزانه', 'رضا یعقوبی', 14000630, 'امور بازنشستگی', '', '', ''],
    [1257, 123123123, 'IR123123123', 2625000, 14000631, 14000824, 'روزانه', 'رحیم هاشمی', 14000630, 'امور سرمایه‌گذاری و بورس', '', '', ''],
    [1258, 123123123, 'IR123123123', 12, 14000631, 14000729, 'روزانه', 'رضا یعقوبی', 14000630, 'تسهیلات و تعهدات', '', '', ''],
    [1259, 123123123, 'IR123123123', 100, 14000631, 14000718, 'روزانه', 'رحیم هاشمی', 14000630, 'امور درمانی', '', '', ''],
    [1348, 123123123, 'IR123123123', 1, 14000705, 14000714, 'روزانه', 'رضا یعقوبی', 14000702, 'امور سرمایه‌گذاری و بورس', '', '', ''],
    [1349, 123123123, 'IR123123123', 1, 14000705, 14000707, 'روزانه', 'رضا یعقوبی', 14000702, 'هزینه عمومی و امور روزمره', '', '', ''],
    [1350, 123123123, 'IR123123123', 1, 14000704, 14000713, 'هفتگی', 'رحیم هاشمی', 14000703, 'تسهیلات و تعهدات', '', '', ''],
    [1363, 123123123, 'IR123123123', 1, 14000722, 14000727, 'روزانه', 'علیرضا حسین زاده', 14000709, 'واریز حقوق', '', '', ''],
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
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { GroupPayaRow } from '../paya-group-remittance-cartable/paya-group-remittance-cartable.component';

@Component({
  selector: 'app-paya-group-remittance-cartable-details',
  templateUrl: './paya-group-remittance-cartable-details.component.html',
  styleUrls: ['./paya-group-remittance-cartable-details.component.scss'],
  providers: [ConfirmationService],
})
export class PayaGroupRemittanceCartableDetailsComponent implements OnInit {
  @Input() groupPayaRow: GroupPayaRow | null = null;
  @Output() confirm = new EventEmitter<boolean>();
  table1Rows: Table1Row[] = [{
    sourceShaba: 'IR81CBKU0000000000001234560101',
    totalAmountOfTheRemittance: 2_625_002,
    numberOfRemittanceRows: 3,
    effectiveDate: 1400_07_05,
    registrar: 'نسرین دریادل',
    registrationDate: 1400_07_01,
  }];
  table2Rows: Table2Row[] = [1, 2, 3, 4].map(x => ({
    fullName: ['شهاب گودرزی', 'جمشید داریوشیان', 'پژمان صباحی', 'سارا تقدمی'][x - 1],
    confirmationStatus: 'بررسی نشده',
    confirmationType: 'اختیاری',
  }));
  constructor(private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
  }

  showConfirmation() {
    const message = `
      مطابق ابلاغیه بانک مرکزی نحوه محاسبه کارمزد 
      حواله گروهی پایا
      به ازای هر ردیف حواله، مبلغ
      ۱٬۰۰۰ ریال
      می‌باشد
      که با تائید نهایی از حساب مبداء برداشت خواهد شد.
`
    this.confirmationService.confirm({
      message,
      accept: () => {
        this.confirm.emit(true)
      }
    });
  }
}


interface Table1Row {
  sourceShaba?
  numberOfRemittanceRows?
  totalAmountOfTheRemittance?
  effectiveDate?
  registrar?
  registrationDate ?
}

interface Table2Row {
  fullName?
  confirmationType?
  confirmationStatus?
  date?
  description?
}
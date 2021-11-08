import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { RegularPayaRow } from '../paya-regular-remittance-cartable/paya-regular-remittance-cartable.component';

@Component({
  selector: 'app-paya-regular-remittance-cartable-details',
  templateUrl: './paya-regular-remittance-cartable-details.component.html',
  styleUrls: ['./paya-regular-remittance-cartable-details.component.scss'],
  providers: [ConfirmationService],
})
export class PayaRegularRemittanceCartableDetailsComponent implements OnInit {
  @Input() regularPayaRow: RegularPayaRow | null = null;
  @Output() confirm = new EventEmitter<boolean>();
  table1Rows: Table1Row[] = [{
    about: 'امور سرمایه‌گذاری و بورس',
    amount: 1,
    description: 'ghg',
    allowResubmit: 'دارد'
  }];
  table2Rows: Table2Row[] = [1, 2, 3, 4].map(x => ({
    fullName: ['شهاب گودرزی', 'علی حسنی', 'پژمان صباحی', 'سارا تقدمی'][x - 1],
    confirmationStatus: 'بررسی نشده',
    confirmationType: 'اختیاری',
  }));
  constructor(private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
  }

  showConfirmation() {
    const message = `
      مطابق ابلاغیه بانک مرکزی نحوه محاسبه کارمزد حواله پایا
      ۰.۰۱ درصد حواله با حداقل
      ۲٬۰۰۰ ریال و حداکثر کارمزد
      ۲۵٬۰۰۰ ریال می‌باشد که با تائید نهایی از حساب مبداء برداشت خواهد شد.
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
  remittanceRecipient?
  shabaCode?
  bank?
  depositorId?
  amount?
  nationalCode?
  about?
  postalCode?
  shahabCode?
  description?
  allowResubmit?
}

interface Table2Row {
  fullName?
  confirmationType?
  confirmationStatus?
  date?
  description?
}
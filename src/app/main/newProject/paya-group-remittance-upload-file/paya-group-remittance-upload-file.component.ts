import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-paya-group-remittance-upload-file',
  templateUrl: './paya-group-remittance-upload-file.component.html',
  styleUrls: ['./paya-group-remittance-upload-file.component.scss'],
  providers: [ConfirmationService],
})
export class PayaGroupRemittanceUploadFileComponent implements OnInit {
  agreementConfirmationCheckboxValue = false;
  agreementConfirmed = false;
  acItems = [
    { value: '111', label: 'قرض‌الحسنه ۱۰۰۰۰۲۳۵' },
    { value: '222', label: 'جاری ۱۰۰۰۰۴۰۰' },
    { value: '333', label: 'کوتاه‌مدت ۱۰۰۰۰۵۹۸' },
    { value: '444', label: 'بلندمدت ۱۰۰۰۰۹۷۴' },
  ]
  constructor(private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
  }
  showConfirmation() {
    const message = `
      بر اساس دستورالعمل بانک مرکزی ج.ا.ا مشتریان حقوقی فاقد کد شهاب از تاریخ 1400/02/06 
      امکان استفاده از خدمت حواله پایا را نخواهند داشت.
      خواهشمند است جهت رفع مشکل به شعب عامل خود مراجعه فرمائید.
`
    this.confirmationService.confirm({
      message,
      accept: () => {
        // nothing
      }
    });
  }
}

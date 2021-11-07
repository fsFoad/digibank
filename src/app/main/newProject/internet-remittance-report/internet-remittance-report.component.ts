import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-internet-remittance-report',
  templateUrl: './internet-remittance-report.component.html',
  styleUrls: ['./internet-remittance-report.component.scss']
})
export class InternetRemittanceReportComponent implements OnInit {
  acItems = [
    { value: '111', label: 'قرض‌الحسنه ۱۰۰۰۰۲۳۵' },
    { value: '222', label: 'جاری ۱۰۰۰۰۴۰۰' },
    { value: '333', label: 'کوتاه‌مدت ۱۰۰۰۰۵۹۸' },
    { value: '444', label: 'بلندمدت ۱۰۰۰۰۹۷۴' },
  ]
  statusItems = [
    { value: '1', label: 'وضعیت یک' },
    { value: '2', label: 'وضعیت دو' },
    { value: '3', label: 'وضعیت سه' },
  ]
  createReportFile = false;
  format: 'html' | 'csv' | 'pdf' = 'html';
  constructor() { }

  ngOnInit(): void {
  }

}

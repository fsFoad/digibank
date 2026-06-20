import { Component, OnInit } from '@angular/core';
import {Constants} from '../../shared/constants/Constants';

@Component({
  selector: 'app-internet-remittance-report',
  templateUrl: './internet-remittance-report.component.html',
  styleUrls: ['./internet-remittance-report.component.scss']
})
export class InternetRemittanceReportComponent implements OnInit {
  acItems = Constants.acItems;
  // acItems = [
  //   { value: '111', label: 'قرض‌الحسنه ۱۰۰۰۰۲۳۵' },
  //   { value: '222', label: 'جاری ۱۰۰۰۰۴۰۰' },
  //   { value: '333', label: 'کوتاه‌مدت ۱۰۰۰۰۵۹۸' },
  //   { value: '444', label: 'بلندمدت ۱۰۰۰۰۹۷۴' },
  // ]
  statusItems = Constants.internetRemittanceReport_statusItems
  createReportFile = false;
  format: 'html' | 'csv' | 'pdf' = 'html';
  constructor() { }

  ngOnInit(): void {
  }

}

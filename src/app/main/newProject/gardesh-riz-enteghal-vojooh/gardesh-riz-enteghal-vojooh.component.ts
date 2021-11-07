import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gardesh-riz-enteghal-vojooh',
  templateUrl: './gardesh-riz-enteghal-vojooh.component.html',
  styleUrls: ['./gardesh-riz-enteghal-vojooh.component.scss']
})
export class GardeshRizEnteghalVojoohComponent implements OnInit {
  accountType = 'sourceAccount'
  remittancePortal = 'normal'
  acItems = [
    { value: '111', label: 'قرض‌الحسنه ۱۰۰۰۰۲۳۵' },
    { value: '222', label: 'جاری ۱۰۰۰۰۴۰۰' },
    { value: '333', label: 'کوتاه‌مدت ۱۰۰۰۰۵۹۸' },
    { value: '444', label: 'بلندمدت ۱۰۰۰۰۹۷۴' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

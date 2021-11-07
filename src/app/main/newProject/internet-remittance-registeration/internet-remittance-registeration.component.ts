import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-internet-remittance-registeration',
  templateUrl: './internet-remittance-registeration.component.html',
  styleUrls: ['./internet-remittance-registeration.component.scss']
})
export class InternetRemittanceRegisterationComponent implements OnInit {
  acItems = [
    { value: '111', label: 'قرض‌الحسنه ۱۰۰۰۰۲۳۵' },
    { value: '222', label: 'جاری ۱۰۰۰۰۴۰۰' },
    { value: '333', label: 'کوتاه‌مدت ۱۰۰۰۰۵۹۸' },
    { value: '444', label: 'بلندمدت ۱۰۰۰۰۹۷۴' },
  ]
  organizationalAccount = false;
  constructor() { }

  ngOnInit(): void {
  }

}

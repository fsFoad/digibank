import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-satna-remittance-registration',
  templateUrl: './satna-remittance-registration.component.html',
  styleUrls: ['./satna-remittance-registration.component.scss']
})
export class SatnaRemittanceRegistrationComponent implements OnInit {
  acItems = [
    { value: '111', label: 'قرض‌الحسنه ۱۰۰۰۰۲۳۵' },
    { value: '222', label: 'جاری ۱۰۰۰۰۴۰۰' },
    { value: '333', label: 'کوتاه‌مدت ۱۰۰۰۰۵۹۸' },
    { value: '444', label: 'بلندمدت ۱۰۰۰۰۹۷۴' },
  ]
  
  forItems = [
    { value: '1', label: 'بابت یک' },
    { value: '2', label: 'بابت دو' },
    { value: '3', label: 'بابت سه' },
  ]
  
  receiverItems = [
    { value: '1', label: 'حقیقی' },
    { value: '2', label: 'حقوقی' },
  ]
  showConfirmationComponent = false;

  constructor() { }

  ngOnInit(): void {
  }

  showConfirmation(): void {
    this.showConfirmationComponent = true;
  }

  closeConfirmation(): void {
    this.showConfirmationComponent = false;
  }
}

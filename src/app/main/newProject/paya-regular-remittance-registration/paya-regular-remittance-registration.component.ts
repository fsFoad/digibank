import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paya-regular-remittance-registration',
  templateUrl: './paya-regular-remittance-registration.component.html',
  styleUrls: ['./paya-regular-remittance-registration.component.scss']
})
export class PayaRegularRemittanceRegistrationComponent implements OnInit {
  showConfirmationComponent = false;
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
  periodItems = [
    { value: '1', label: 'دوره یک' },
    { value: '2', label: 'دوره دو' },
    { value: '3', label: 'دوره سه' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

  showConfirmation(show: boolean): void {
    this.showConfirmationComponent = show;
  }

}

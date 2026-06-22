import { Component, OnInit } from '@angular/core';
import {Constants} from '../../shared/constants/Constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-satna-remittance-registration',
  templateUrl: './satna-remittance-registration.component.html',
  styleUrls: ['./satna-remittance-registration.component.scss']
})
export class SatnaRemittanceRegistrationComponent implements OnInit {
  acItems=Constants.acItems;
  forItems=Constants.forItems;
  // acItems = [
  //   { value: '111', label: 'قرض‌الحسنه ۱۰۰۰۰۲۳۵' },
  //   { value: '222', label: 'جاری ۱۰۰۰۰۴۰۰' },
  //   { value: '333', label: 'کوتاه‌مدت ۱۰۰۰۰۵۹۸' },
  //   { value: '444', label: 'بلندمدت ۱۰۰۰۰۹۷۴' },
  // ]
  
  // forItems = [
  //   { value: '1', label: 'بابت یک' },
  //   { value: '2', label: 'بابت دو' },
  //   { value: '3', label: 'بابت سه' },
  // ]
  
  receiverItems = Constants.satnaRemittanceRegistration_receiverItems
  showConfirmationComponent = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showConfirmation(): void {
    this.showConfirmationComponent = true;
  }

  closeConfirmation(): void {
    this.showConfirmationComponent = false;
  }

  goHome(): void {
    this.router.navigate(['/']);
  }
}

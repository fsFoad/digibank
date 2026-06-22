import { Component, OnInit } from '@angular/core';
import {Constants} from "../../shared/constants/Constants";
import { Router } from '@angular/router';

@Component({
  selector: 'app-daryaft-file-soorathesab',
  templateUrl: './daryaft-file-soorathesab.component.html',
  styleUrls: ['./daryaft-file-soorathesab.component.scss']
})
export class DaryaftFileSoorathesabComponent implements OnInit {
  constants:Constants
  acItems = Constants.acItems;
  billingPeriod = 'previousMonth'
  customize = false;
  format = 'html';
  // acItems = [
  //   { value: '111', label: 'قرض‌الحسنه ۱۰۰۰۰۲۳۵' },
  //   { value: '222', label: 'جاری ۱۰۰۰۰۴۰۰' },
  //   { value: '333', label: 'کوتاه‌مدت ۱۰۰۰۰۵۹۸' },
  //   { value: '444', label: 'بلندمدت ۱۰۰۰۰۹۷۴' },
  // ]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  goHome(): void {
    this.router.navigate(['/']);
  }
}

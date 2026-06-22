import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from "primeng/api";
import {Constants} from '../../shared/constants/Constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paya-regular-remittance-registration',
  templateUrl: './paya-regular-remittance-registration.component.html',
  styleUrls: ['./paya-regular-remittance-registration.component.scss'],
  providers: [ConfirmationService]
})
export class PayaRegularRemittanceRegistrationComponent implements OnInit {
  showConfirmationComponent = false;
  acItems = Constants.acItems;
  forItems = Constants.forItems;
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
  periodItems = Constants.payaRegularRemittanceRegistration_periodItems
  constructor(private confirmationService: ConfirmationService, private router: Router) { }

  ngOnInit(): void {
  }

  showConfirmation(show: boolean): void {
    if (show) {
      const message = `
      مطابق ابلاغیه بانک مرکزی نحوه محاسبه کارمزد حواله پایا
      ۰.۰۱ درصد حواله با حداقل
      ۲٬۰۰۰ ریال و حداکثر کارمزد
      ۲۵٬۰۰۰ ریال می‌باشد که با تائید نهایی از حساب مبداء برداشت خواهد شد.
`
      this.confirmationService.confirm({
        message,
        accept: () => {
          this.showConfirmationComponent = true;
        }
      });
    } else {
      this.showConfirmationComponent = false;
    }
  }


  goHome(): void {
    this.router.navigate(['/']);
  }
}

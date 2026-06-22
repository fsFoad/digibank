import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Constants } from '../../shared/constants/Constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paya-group-remittance-upload-file',
  templateUrl: './paya-group-remittance-upload-file.component.html',
  styleUrls: ['./paya-group-remittance-upload-file.component.scss'],
  providers: [ConfirmationService],
})
export class PayaGroupRemittanceUploadFileComponent implements OnInit {
  agreementConfirmationCheckboxValue = false;
  agreementConfirmed = false;
  acItems = Constants.payaGroupRemittanceUploadFile_acItems
  constructor(private confirmationService: ConfirmationService, private router: Router) { }

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

  goHome(): void {
    this.router.navigate(['/']);
  }
}

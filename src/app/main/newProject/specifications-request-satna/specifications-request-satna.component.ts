import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ConfirmationService} from "primeng/api";
import {ConfirmDialogModule} from 'primeng/confirmdialog';

@Component({
  selector: 'app-specifications-request-satna',
  templateUrl: './specifications-request-satna.component.html',
  styleUrls: ['./specifications-request-satna.component.scss'],
  providers: [ConfirmationService]
})
export class SpecificationsRequestSatnaComponent implements OnInit {
  @Input() inputDetails
  @Output() close = new EventEmitter<string>();
  SourceAccountNumber;
  amounts;
  registrar;
  dateEffective;
  registrationDate;
  ibonOrigin;
  verificationCode;
  remittancesNumber;
  accountTypeOrigin;
  accountTypeDestination;
  nationalCode;
  shahab;
  ibonDestination;
  des;
  postalCode;
  remittanceRecipientName;
  table1List: {
    recipientRemittance: string,
    ibonRecipient: string,
    bank: string,
    depositorID: number,
    amount: number,
    nationalCode: number,
    About: string,
    postalCode: number,
    shahabCode: string,
    des: string,
    resubmitLicense: string,
  }[];
  table2List: {
    fullName: string,
    verificationType: string,
    verificationStatus: string,
    history: number,
    des: string,
  }[];

  constructor(
    private confirmationService: ConfirmationService,
  ) {
  }

  ngOnInit(): void {

    debugger
    this.SourceAccountNumber = this.inputDetails.SourceAccountNumber;
    this.accountTypeOrigin = this.inputDetails.accountTypeOrigin;
    this.accountTypeDestination = this.inputDetails.accountTypeDestination;
    this.nationalCode = this.inputDetails.nationalCode;
    this.shahab = this.inputDetails.shahab;
    this.ibonOrigin = this.inputDetails.ibonOrigin;
    this.ibonDestination = this.inputDetails.ibonDestination;
    this.remittanceRecipientName = this.inputDetails.remittanceRecipientName;
    this.des = this.inputDetails.des;
    this.postalCode = this.inputDetails.postalCode;
    this.amounts = this.inputDetails.amounts;
    this.registrar = this.inputDetails.registrar;
    this.dateEffective = this.inputDetails.dateEffective;
    this.registrationDate = this.inputDetails.registrationDate;
    this.verificationCode = this.inputDetails.verificationCode;
    this.remittancesNumber = this.inputDetails.remittancesNumber;

    debugger

    switch (this.registrar) {

      case 'رامین کوهی': {
        debugger
        this.table1List = [{
          recipientRemittance: "علی کمالی",
          ibonRecipient: 'IR370610000000100842541368',
          bank: 'ملی',
          depositorID: 1225,
          amount: 100000,
          nationalCode: 2358426589,
          About: 'امور سرمایه گذاری و بورس',
          postalCode: 5445435565,
          shahabCode: '',
          des: 'ghg',
          resubmitLicense: 'دارد',
        }];
        break;
      }
      case 'شهاب شکوری': {
        debugger
        this.table1List = [{
          recipientRemittance: "محمد حسینی",
          ibonRecipient: 'IR956412000000100845246851',
          bank: 'صادرات',
          depositorID: 1563,
          amount: 20000000,
          nationalCode: 5832540245,
          About: '',
          postalCode: 5445435565,
          shahabCode: '',
          des: '',
          resubmitLicense: 'ندارد',
        }];
        break;
      }
      case 'شهاب شکوری': {
        debugger
        this.table1List = [{
          recipientRemittance: 'عباس همایونی',
          ibonRecipient: 'IR956286000000195745286421',
          bank: 'پاسارگاد',
          depositorID: 1854,
          amount: 500000,
          nationalCode: 6682542152,
          About: '',
          postalCode: 884565454,
          shahabCode: '',
          des: '',
          resubmitLicense: 'ندارد',
        }];
        break;
      }
    }
    debugger
    switch (this.registrar) {
      case 'رامین کوهی': {
        this.table2List = [{
          fullName: 'حسین بهجتی',
          verificationType: 'اختیاری',
          verificationStatus: 'بررسی نشده',
          history: null,
          des: '',
        }];
        break;
      }
      case 'شهاب شکوری': {
        this.table2List = [{
          fullName: 'ایرج خداپرست',
          verificationType: 'اختیاری',
          verificationStatus: 'بررسی نشده',
          history: null,
          des: '',
        }];
        break;
      }
      case 'مهدی آل منصور': {
        this.table2List = [{
          fullName: 'سیاوش راسخی',
          verificationType: 'اختیاری',
          verificationStatus: 'بررسی نشده',
          history: null,
          des: '',
        }];
        break;
      }
    }

  }

  onClose() {
    this.inputDetails = null;
    this.close.emit('close');
  }
  confirm(){
    this.confirmationService.confirm({
      message: "مطابق ابلاغیه بانک مرکزی نحوه محاسبه کارمزد ساتنا 0.02 درصد حواله با حداقل کارمزد 30،000 ریال و حداکثر کارمزد 250،000 ریال می باشد که با تایید نهایی از حساب مبدا برداشت خواهد شد."
    ,
      accept: () => {
        this.onClose()
        //Actual logic to perform a confirmation
      }
    });
  }
}

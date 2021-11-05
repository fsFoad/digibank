import {Component, Input, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-details-reliable-remittance-request',
  templateUrl: './details-reliable-remittance-request.component.html',
  styleUrls: ['./details-reliable-remittance-request.component.scss']
})
export class DetailsReliableRemittanceRequestComponent implements OnInit {
  @Input() inputDetails
  @Output() close = new EventEmitter<string>();
  SourceAccountNumber;
  amounts;
  registrar;
  dateEffective;
  registrationDate;
  ibon;
  verificationCode;
  remittancesNumber;

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

  constructor() {
  }

  ngOnInit(): void {

    debugger
    this.SourceAccountNumber = this.inputDetails.SourceAccountNumber;
    this.amounts = this.inputDetails.amounts;
    this.registrar = this.inputDetails.registrar;
    this.dateEffective = this.inputDetails.dateEffective;
    this.registrationDate = this.inputDetails.registrationDate;
    this.ibon = this.inputDetails.ibon;
    this.verificationCode = this.inputDetails.verificationCode;
    this.remittancesNumber = this.inputDetails.remittancesNumber;

    debugger

    switch (this.registrar) {
      case 'علی محمدی': {
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
      case 'محمد سروری': {
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
      case 'فرهاد کشوری': {
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
      case 'علی محمدی': {
        this.table2List = [{
          fullName: 'حسین بهجتی',
          verificationType: 'اختیاری',
          verificationStatus: 'بررسی نشده',
          history: null,
          des: '',
        }];
        break;
      }
      case 'محمد سروری': {
        this.table2List = [{
          fullName: 'ایرج خداپرست',
          verificationType: 'اختیاری',
          verificationStatus: 'بررسی نشده',
          history: null,
          des: '',
        }];
        break;
      }
      case 'فرهاد کشوری': {
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
}

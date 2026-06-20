import {Component, Input, EventEmitter, OnInit, Output} from '@angular/core';
import {ConfirmationService} from "primeng/api";
import { Constants } from '../../shared/constants/Constants';

@Component({
  selector: 'app-details-reliable-remittance-request',
  templateUrl: './details-reliable-remittance-request.component.html',
  styleUrls: ['./details-reliable-remittance-request.component.scss'],
  providers: [ConfirmationService]
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

  constructor(
    private confirmationService: ConfirmationService,
  ) {
  }

  ngOnInit(): void {

    this.SourceAccountNumber = this.inputDetails.SourceAccountNumber;
    this.amounts = this.inputDetails.amounts;
    this.registrar = this.inputDetails.registrar;
    this.dateEffective = this.inputDetails.dateEffective;
    this.registrationDate = this.inputDetails.registrationDate;
    this.ibon = this.inputDetails.ibon;
    this.verificationCode = this.inputDetails.verificationCode;
    this.remittancesNumber = this.inputDetails.remittancesNumber;


    switch (this.registrar) {
      case 'علی محمدی': {
        this.table1List = Constants.detailsReliableRemittanceRequest_table1List;
        break;
      }
      case 'محمد سروری': {
        this.table1List = Constants.detailsReliableRemittanceRequest_table1List_2;
        break;
      }
      case 'فرهاد کشوری': {
        this.table1List = Constants.detailsReliableRemittanceRequest_table1List_3;
        break;
      }
    }
    switch (this.registrar) {
      case 'علی محمدی': {
        this.table2List = Constants.detailsReliableRemittanceRequest_table2List;
        break;
      }
      case 'محمد سروری': {
        this.table2List = Constants.detailsReliableRemittanceRequest_table2List_2;
        break;
      }
      case 'فرهاد کشوری': {
        this.table2List = Constants.detailsReliableRemittanceRequest_table2List_3;
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
      message: "مطابق ابلاغیه بانک مرکزی نحوه محاسبه کارمزد حواله پایا 0.01 درصد حواله با حداقل کارمزد2،000 ریال و حداکثر کارمزد 25،000 ریال می باشد که با تایید نهایی از حساب مبدا برداشت خواهد شد."
      ,
      accept: () => {
        this.onClose()
        //Actual logic to perform a confirmation
      }
    });
  }
}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ConfirmationService} from "primeng/api";
import { Constants } from '../../shared/constants/Constants';

@Component({
  selector: 'app-request-ghoboz',
  templateUrl: './request-ghoboz.component.html',
  styleUrls: ['./request-ghoboz.component.scss']
})
export class RequestGhobozComponent implements OnInit {
  @Input() inputDetails
  @Output() close = new EventEmitter<string>();
  SourceAccountNumber;
  amounts;
  registrar;
  dateEffective;
  registrationDate;
  ghabzType;
  accountnNumberdeterminesAmount;
  remittancesNumber;

  table1List: {
    recipientRemittance: string,
    ghabzTypeRecipient: string,
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
  ) {
  }

  ngOnInit(): void {

    this.amounts = this.inputDetails.amounts;
    this.registrar = this.inputDetails.registrar;
    this.ghabzType = this.inputDetails.ghabzType;
    this.accountnNumberdeterminesAmount = this.inputDetails.accountnNumberdeterminesAmount;

    switch (this.registrar) {
      case 'علی محمدی': {
        this.table1List = Constants.requestGhoboz_table1List;
        break;
      }
      case 'محمد سروری': {
        this.table1List = Constants.requestGhoboz_table1List_2;
        break;
      }
      case 'فرهاد کشوری': {
        this.table1List = Constants.requestGhoboz_table1List_3;
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
}

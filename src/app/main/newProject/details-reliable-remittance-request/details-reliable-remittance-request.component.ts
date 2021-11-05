import {Component, Input,EventEmitter, OnInit, Output} from '@angular/core';

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
  economicCode;
  remittancesNumber;
  table1RecipientRemittance;
  tempList:{
    table1RecipientRemittance:string,
    table1IbonRecipient:number,
  };
  constructor(

  ) { }

  ngOnInit(): void {
   console.log(this.inputDetails);
   debugger
    this.SourceAccountNumber = this.inputDetails.SourceAccountNumber;
    this.amounts = this.inputDetails.amounts;
    this.registrar = this.inputDetails.registrar;
    this.dateEffective = this.inputDetails.dateEffective;
    this.registrationDate = this.inputDetails.registrationDate;
    this.ibon = this.inputDetails.ibon;
    this.economicCode = this.inputDetails.economicCode;

    debugger

  }
  onClose() {
    this.inputDetails = null;
    this.close.emit('close');
  }
}

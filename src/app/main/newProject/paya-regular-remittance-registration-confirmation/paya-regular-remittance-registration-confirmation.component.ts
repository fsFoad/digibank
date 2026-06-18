import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paya-regular-remittance-registration-confirmation',
  templateUrl: './paya-regular-remittance-registration-confirmation.component.html',
  styleUrls: ['./paya-regular-remittance-registration-confirmation.component.scss']
})
export class PayaRegularRemittanceRegistrationConfirmationComponent implements OnInit {
  @Output() confirm = new EventEmitter<boolean>();
  confirmCheckboxValue = false;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-satna-remittance-registration-confirmation',
  templateUrl: './satna-remittance-registration-confirmation.component.html',
  styleUrls: ['./satna-remittance-registration-confirmation.component.scss']
})
export class SatnaRemittanceRegistrationConfirmationComponent implements OnInit {
  confirmed = false;
  @Output() confirm = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}

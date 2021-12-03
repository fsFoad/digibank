import { Component, OnInit } from '@angular/core';
import { Constants } from 'app/main/shared/constants/Constants';

@Component({
  selector: 'app-internet-remittance-registeration',
  templateUrl: './internet-remittance-registeration.component.html',
  styleUrls: ['./internet-remittance-registeration.component.scss']
})
export class InternetRemittanceRegisterationComponent implements OnInit {
  acItems = Constants.acItems;
  organizationalAccount = false;
  constructor() { }

  ngOnInit(): void {
  }

}

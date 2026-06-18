import { Component, OnInit } from '@angular/core';
import { Constants } from 'app/main/shared/constants/Constants';
import {Router} from '@angular/router';

@Component({
  selector: 'app-internet-remittance-registeration',
  templateUrl: './internet-remittance-registeration.component.html',
  styleUrls: ['./internet-remittance-registeration.component.scss']
})
export class InternetRemittanceRegisterationComponent implements OnInit {
  acItems = Constants.acItems;
  organizationalAccount = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onClose(){
    this.router.navigate(['']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Constants } from 'app/main/shared/constants/Constants';

@Component({
  selector: 'app-your-rial-accounts',
  templateUrl: './your-rial-accounts.component.html',
  styleUrls: ['./your-rial-accounts.component.scss']
})
export class YourRialAccountsComponent implements OnInit {
  accounts = Constants.acSummaries;
  constructor() { }

  ngOnInit(): void {
  }

}

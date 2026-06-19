import {Component, OnInit} from '@angular/core';
import {Constants} from '../../shared/constants/Constants';

@Component({
  selector: 'app-rial-account-by-bank',
  templateUrl: './rial-account-by-bank.component.html',
  styleUrls: ['./rial-account-by-bank.component.scss']
})
export class RialAccountByBankComponent implements OnInit {
  banklistConstants = Constants.banklist;

  constructor() {
  }

  ngOnInit(): void {
  }

}

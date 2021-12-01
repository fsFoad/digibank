import { Component, OnInit } from '@angular/core';
import {Constants} from '../../shared/constants/Constants';

@Component({
  selector: 'app-charg-wallet',
  templateUrl: './charg-wallet.component.html',
  styleUrls: ['./charg-wallet.component.scss']
})
export class ChargWalletComponent implements OnInit {
  acItems = Constants.acItems;
  constructor() { }

  ngOnInit(): void {
  }

}

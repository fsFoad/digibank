import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatasetService } from '../../shared/services/dataset.service';

interface CurrencyAccount {
  title: string;
  accountNumber: string;
  balance: number;
  currencyType: string;
  currencyIcon: string;
  openingBranchCode: string;
  openingBranchName: string;
  dateOfLastTurnover: string;
}

@Component({
  selector: 'app-your-currency-accounts',
  templateUrl: './your-currency-accounts.component.html',
  styleUrls: ['./your-currency-accounts.component.scss']
})
export class YourCurrencyAccountsComponent implements OnInit {
  accounts: CurrencyAccount[] = [];

  constructor(private router: Router, private datasetService: DatasetService) { }

  ngOnInit(): void {
    this.datasetService.loadRaw('your-currency-accounts', []).then((data: CurrencyAccount[]) => {
      this.accounts = data;
    });
  }


  goHome(): void {
    this.router.navigate(['/']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-your-currency-accounts',
  templateUrl: './your-currency-accounts.component.html',
  styleUrls: ['./your-currency-accounts.component.scss']
})
export class YourCurrencyAccountsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  goHome(): void {
    this.router.navigate(['/']);
  }
}

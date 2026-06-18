import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountSummary } from 'app/main/shared/constants/Constants';

@Component({
  selector: 'app-account-summary-card',
  templateUrl: './account-summary-card.component.html',
  styleUrls: ['./account-summary-card.component.scss']
})
export class AccountSummaryCardComponent implements OnInit {
  @Input() account: AccountSummary;
  @Output() update = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}

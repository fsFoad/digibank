import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DatasetService } from '../../shared/services/dataset.service';

interface L1Row {
  code: string;
  title: string;
}

@Component({
  selector: 'app-account-transactions',
  templateUrl: './account-transactions.component.html',
  styleUrls: ['./account-transactions.component.scss']
})
export class AccountTransactionsComponent implements OnInit {
  level1Rows: L1Row[] = [];
  level1Loading = false;
  form: FormGroup;
  accountDialogVisible = false;
  selectedAccount: any = null;
  constructor(fb: FormBuilder, private datasetService: DatasetService) {
    this.form = fb.group({
      billingPeriod: ['customRange'],
      fromDate: [''],
      toDate: [''],
      active: [false],
      nature: ['not-important'],
    });
  }

  ngOnInit(): void {
  }

  confirm(): void {
    this.level1Loading = true;
    this.datasetService.loadRaw('account-transactions', []).then((rows: L1Row[]) => {
      this.level1Rows = rows;
      this.level1Loading = false;
    });
  }

  showAccount(account: any): void {
    this.selectedAccount = account;
    this.accountDialogVisible = true;
  }
}


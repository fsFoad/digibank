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
    this.datasetService.loadRaw('account-tree-base-accounts', []).then((baseAccounts: [string, string][]) => {
      this.level1Rows = createL1RowsFromBase(baseAccounts);
      this.level1Loading = false;
    });
  }
}
function createL1RowsFromBase(baseAccounts: [string, string][]): L1Row[] {
  return baseAccounts.map(x => ({
    code: x[0],
    title: x[1],
    rows: [0, 1, 2].map(y => ({
      code: `${x[0]}${1000 + y}`,
      title: `sub title ${y + 1}`,
      rows: [0, 1, 2].map(z => ({
        code: `${x[0]}${1000 + y}${1000 + z}`,
        title: `sub sub title ${z + 1}`,
      })),
    })),
  })) as any;
}


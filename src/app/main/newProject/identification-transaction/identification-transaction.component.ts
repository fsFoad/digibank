import {Component, OnInit} from '@angular/core';
import {Constants} from '../../shared/constants/Constants';
import {Bills} from '../models/DigiBankModel';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { DatasetService } from '../../shared/services/dataset.service';

@Component({
  selector: 'app-identification-transaction',
  templateUrl: './identification-transaction.component.html',
  styleUrls: ['./identification-transaction.component.scss']
})
export class IdentificationTransactionComponent implements OnInit {
  readonly dataset = 'identification-transaction';
  cols: any[];
  bills: Bills[] = [];
  case = 1;
  acItems = Constants.acItems;
  bankNameList = Constants.bankNameList;
  selectedBank: string | null = null;
  operationType = Constants.operationType;
  priority = Constants.priority;
  financialHeading = Constants.financialHeading;
  organizationalUnit = Constants.organizationalUnit;
  tableFlag = false;
  display = false;
  selectId;
  fsList: {
    id: number, accountNumber: string, history: string, branchName: string,
    yektaCode: string, debtor: string, depositor: string, check: string,
    amounts: string, donDate: string, amount: number, creditor: string, operationType: string,
    desTransaction: string, priority: string, financialHeading: string,
  }[] = [];

  public form: FormGroup;

  constructor(fb: FormBuilder, private router: Router, private datasetService: DatasetService) {
    this.form = fb.group({
      operationType: [''],
      desTransaction: [''],
      priority: [''],
      financialHeading: [''],
    });
  }

  private readonly baseCols = [
    {field: 'bankName', header: 'بانک'},
    {field: 'accountNumber', header: 'شماره حساب'},
    {field: 'branchName', header: 'نام شعبه'},
    {field: 'history', header: 'تاریخ اعمال'},
    {field: 'depositor', header: 'واریز کننده'},
    {field: 'yektaCode', header: 'کد یکتای تراکنش'},
    {field: 'check', header: 'شماره سند/چک / حواله'},
    {field: 'debtor', header: 'بدهکار'},
    {field: 'creditor', header: 'بستانکار'},
    {field: 'donDate', header: 'تاریخ انجام'},
  ];

  ngOnInit(): void {
    this.cols = [...this.baseCols];
  }

  recover(): void {
    if (!this.selectedBank) {
      return;
    }
    const bankLabel = (this.bankNameList.find(b => b.value === this.selectedBank) || {} as any).label;
    this.datasetService.loadRaw(this.dataset, {}).then((all: Record<string, any[]>) => {
      const rows = (all && all[this.selectedBank]) || [];
      this.fsList = rows.map(x => ({...x, bankName: bankLabel}));
      this.bills = this.fsList;
      this.tableFlag = true;
    });
  }

  selectRow(newItem) {
    this.selectId = newItem.id;
    this.display = true;
  }

  submit() {
    this.display = false;
    this.cols = [
      ...this.baseCols,
      {field: 'operationType', header: 'نوع عملیات'},
      {field: 'desTransaction', header: 'شرح دوم تراکنش'},
      {field: 'priority', header: 'اولویت تراکنش'},
      {field: 'financialHeading', header: 'کد سرفصل مالی'},
    ];
    this.bills = this.fsList;
    this.bills.map(x => {
      if (this.selectId === x['id']) {
        x['operationType'] = this.form.controls['operationType'].value;
        x['desTransaction'] = this.form.controls['desTransaction'].value;
        x['priority'] = this.form.controls['priority'].value;
        x['financialHeading'] = this.form.controls['financialHeading'].value;
      }
    });
    this.form.reset();
  }

  goHome(): void {
    this.router.navigate(['/']);
  }
}

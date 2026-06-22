import {Component, OnInit} from '@angular/core';
import {Constants} from '../../shared/constants/Constants';
import {Bills} from '../models/DigiBankModel';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-identification-transaction',
  templateUrl: './identification-transaction.component.html',
  styleUrls: ['./identification-transaction.component.scss']
})
export class IdentificationTransactionComponent implements OnInit {
  cols: any[];
  bills: Bills[];
  case = 1;
  acItems = Constants.acItems;
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
  }[] = [
    {
      'id': 0, 'accountNumber': '  340-1000000145-65', 'history': '1400/01/01',
      branchName: '', 'yektaCode': '0',
      'debtor': '0', 'depositor': 'علی محمدی', 'check': '2222589',
      'amounts': ' 6785656566', 'donDate': '1400/06/01', 'amount': 10000000, 'creditor': '10000000', operationType: '',
      desTransaction: '', priority: '', financialHeading: ''
    },
    {
      'id': 1, 'accountNumber': '340-1000000145-65', 'history': '1400/02/11'
      , branchName: '', 'yektaCode': '10000023',
      'debtor': '0', 'depositor': 'سینا کریمی', 'check': '2222590',
      'amounts': ' 356676345', 'donDate': '1400/06/01', 'amount': 7000000, 'creditor': '30000000', operationType: '',
      desTransaction: '', priority: '', financialHeading: ''
    },
    {
      'id': 2, 'accountNumber': '340-1000000145-65', 'history': '1400/02/21'
      , branchName: '', 'yektaCode': '10000024',
      'debtor': '0', 'depositor': 'سامان کاشانی', 'check': '2222591',
      'amounts': ' 786745656', 'donDate': '1400/06/01', 'amount': 5000000, 'creditor': '15000000', operationType: '',
      desTransaction: '', priority: '', financialHeading: ''
    },
    {
      'id': 3, 'accountNumber': '340-1000000145-65', 'history': '1400/04/05'
      , branchName: '', 'yektaCode': '0',
      'debtor': '0', 'depositor': 'عماد همتی', 'check': '2222592',
      'amounts': '567678565', 'donDate': '1400/06/01', 'amount': 25000000, 'creditor': '55000000', operationType: '',
      desTransaction: '', priority: '', financialHeading: ''
    },
    {
      'id': 4, 'accountNumber': '440-1006580523-01', 'history': '1400/05/01'
      , branchName: '', 'yektaCode': '10000026',
      'debtor': '0', 'depositor': 'فرید ترابی', 'check': '2222593',
      'amounts': '5645765', 'donDate': '1400/06/01', 'amount': 1000000, 'creditor': '60000000', operationType: '',
      desTransaction: '', priority: '', financialHeading: ''
    },
    {
      'id': 5, 'accountNumber': '340-1000000145-65', 'history': '1400/05/11'
      , branchName: '', 'yektaCode': '10000027',
      'debtor': '0', 'depositor': 'کامیار کاظمی', 'check': '2222594',
      'amounts': '789677565', 'donDate': '1400/06/01', 'amount': 10000000, 'creditor': '25000000', operationType: '',
      desTransaction: '', priority: '', financialHeading: ''
    },
    {
      'id': 6, 'accountNumber': '440-1006580523-01', 'history': '1400/05/21'
      , branchName: '', 'yektaCode': '0',
      'debtor': '0', 'depositor': 'عرفان حشمتی', 'check': '2222595',
      'amounts': '3545643467', 'donDate': '1400/06/01', 'amount': 5000000, 'creditor': '15000000', operationType: '',
      desTransaction: '', priority: '', financialHeading: ''
    },
    {
      'id': 7, 'accountNumber': '440-1006580523-01', 'history': '1400/05/23'
      , branchName: '', 'yektaCode': '10000022',
      'debtor': '0', 'depositor': 'حبیب کمالی', 'check': '2222596',
      'amounts': '346457658', 'donDate': '1400/06/01', 'amount': 20000000, 'creditor': '85000000', operationType: '',
      desTransaction: '', priority: '', financialHeading: ''
    },
    {
      'id': 8, 'accountNumber': '340-1000000145-65', 'history': '1400/05/29'
      , branchName: '', 'yektaCode': '10000022',
      'debtor': '0', 'depositor': 'کریم حسنی', 'check': '2222597',
      'amounts': ' 24365768', 'donDate': '1400/06/01', 'amount': 16000000, 'creditor': '65000000', operationType: '',
      desTransaction: '', priority: '', financialHeading: ''
    },
  ].map((x, i) => ({...x, branchName: Constants.branchNames[i]}));

  public form: FormGroup;

  constructor(fb: FormBuilder, private router: Router) {
    this.form = fb.group({
      operationType: [''],
      desTransaction: [''],
      priority: [''],
      financialHeading: [''],
    });
  }

  ngOnInit(): void {
    this.cols = [
      {field: 'accountNumber', header: 'شماره حساب'},
      {field: 'branchName', header: 'نام شعبه'},
      {field: 'history', header: 'تاریخ اعمال'},
      {field: 'depositor', header: 'واریز کننده'},
      {field: 'yektaCode', header: 'کد یکتای تراکنش'},
      {field: 'check', header: 'شماره سند/چک / حواله'},
      {field: 'debtor', header: 'بدهکار'},
      {field: 'creditor', header: 'بستانکار'},
      {field: 'amount', header: 'مانده'},
      {field: 'donDate', header: 'تاریخ انجام'},

    ];
    this.bills = this.fsList;


  }

  selectRow(newItem) {
    debugger
    this.selectId = newItem.id;
    this.display = true;
  }

  submit() {
    this.display = false;
    this.cols = [
      {field: 'accountNumber', header: 'شماره حساب'},
      {field: 'branchName', header: 'نام شعبه'},
      {field: 'history', header: 'تاریخ اعمال'},
      {field: 'depositor', header: 'واریز کننده'},
      {field: 'yektaCode', header: 'کد یکتای تراکنش'},
      {field: 'check', header: 'شماره سند/چک / حواله'},
      {field: 'debtor', header: 'بدهکار'},
      {field: 'creditor', header: 'بستانکار'},
      {field: 'amount', header: 'مانده'},
      {field: 'donDate', header: 'تاریخ انجام'},
      {field: 'operationType', header: 'نوع عملیات'},
      {field: 'desTransaction', header: 'شرح دوم تراکنش'},
      {field: 'priority', header: 'اولویت تراکنش'},
      {field: 'financialHeading', header: 'کد سرفصل مالی'},
    ];
    debugger
    this.bills = this.fsList;
    this.bills.map(x => {
      if (this.selectId === x.id) {
        x.operationType = this.form.controls['operationType'].value;
        x.desTransaction = this.form.controls['desTransaction'].value;
        x.priority = this.form.controls['priority'].value;
        x.financialHeading = this.form.controls['financialHeading'].value;
      }
      console.log(this.bills);

      debugger
    });
    this.form.reset();
  }

  goHome(): void {
    this.router.navigate(['/']);
  }
}

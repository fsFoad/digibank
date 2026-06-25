import { Component, OnInit } from '@angular/core';
import { Constants } from "../../shared/constants/Constants";
import { Router } from '@angular/router';
import { DatasetService } from '../../shared/services/dataset.service';
import * as XLSX from 'xlsx';

interface BillRow {
  accountNumber: string;
  history: string;
  branchName: string;
  yektaCode: string;
  depositor: string;
  check: string;
  amounts: string;
  doc: string;
  amount: number;
  creditor: string;
  debtor: number;
  dueDateDisplay: string;
  serviceTypeCode: number;
  operationTypeCode: number;
  bankName: string;
}

@Component({
  selector: 'app-daryaft-file-soorathesab',
  templateUrl: './daryaft-file-soorathesab.component.html',
  styleUrls: ['./daryaft-file-soorathesab.component.scss']
})
export class DaryaftFileSoorathesabComponent implements OnInit {
  constants: Constants
  acItems = Constants.acItems;
  bankNameList = Constants.bankNameList;
  selectedBank: string | null = null;
  billingPeriod = 'previousMonth'
  customize = false;
  format = 'html';

  tableFlag = false;
  fsList: BillRow[] = [];

  constructor(private router: Router, private datasetService: DatasetService) { }

  ngOnInit(): void {
  }

  confirm(): void {
    const bankLabel = (this.bankNameList.find(b => b.value === this.selectedBank) || {} as any).label;
    this.datasetService.loadRaw('bill2', []).then((data: BillRow[]) => {
      this.fsList = data.filter(x => x.bankName === bankLabel);
      this.tableFlag = true;
    });
  }

  downloadExcel(): void {
    const exportRows = this.fsList.map((x, i) => ({
      'ردیف': i + 1,
      'نام بانک': x.bankName,
      'شماره حساب': x.accountNumber,
      'نام شعبه': x.branchName,
      'تاریخ اعمال': x.history,
      'واریز کننده': x.depositor,
      'کد یکتای تراکنش': x.yektaCode,
      'شماره سند/چک / حواله': x.check,
      'بدهکار': x.debtor,
      'بستانکار': x.creditor,
      'مانده': x.amount,
      'تاریخ انجام': x.dueDateDisplay,
      'کد نوع خدمات': x.serviceTypeCode,
      'کد نوع عملیات': x.operationTypeCode,
    }));
    const worksheet = XLSX.utils.json_to_sheet(exportRows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'صورتحساب');
    XLSX.writeFile(workbook, 'صورتحساب.xlsx');
  }

  goHome(): void {
    this.router.navigate(['/']);
  }
}

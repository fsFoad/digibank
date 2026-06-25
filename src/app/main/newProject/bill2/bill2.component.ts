import { Component, OnInit } from '@angular/core';
import { Constants } from '../../shared/constants/Constants';
import { Router } from '@angular/router';
import { DatasetService } from '../../shared/services/dataset.service';

interface BillRow {
  accountNumber: string;
  history: string;
  branchName: string;
  yektaCode: string;
  dateDue: string;
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
  selector: 'app-bill2',
  templateUrl: './bill2.component.html',
  styleUrls: ['./bill2.component.scss']
})
export class Bill2Component implements OnInit {
  acItems = Constants.acItems;
  organizationalUnit = Constants.organizationalUnit;
  tableFlag = false;
  fsList: BillRow[] = [];

  constructor(private router: Router, private datasetService: DatasetService) { }

  ngOnInit(): void {
    this.datasetService.loadRaw('bill2', []).then((data: BillRow[]) => {
      this.fsList = data;
    });
  }


  goHome(): void {
    this.router.navigate(['/']);
  }
}

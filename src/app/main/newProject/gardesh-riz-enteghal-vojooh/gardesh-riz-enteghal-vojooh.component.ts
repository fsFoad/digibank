import { Component, OnInit } from '@angular/core';
import { Constants } from '../../shared/constants/Constants';
import { Router } from '@angular/router';
import { DatasetService } from '../../shared/services/dataset.service';

interface TransferRow {
  sourceAccountNumber: string;
  destinationAccountNumber: string;
  branchName: string;
  history: string;
  depositor: string;
  yektaCode: string;
  check: string;
  debtor: number;
  creditor: string;
  amount: number;
  dueDate: string;
  bankName: string;
}

@Component({
  selector: 'app-gardesh-riz-enteghal-vojooh',
  templateUrl: './gardesh-riz-enteghal-vojooh.component.html',
  styleUrls: ['./gardesh-riz-enteghal-vojooh.component.scss']
})
export class GardeshRizEnteghalVojoohComponent implements OnInit {
  readonly dataset = 'gardesh-riz-enteghal-vojooh';

  accountType = 'sourceAccount'
  remittancePortal = 'normal'
  acItems = Constants.acItems;
  bankNameList = Constants.bankNameList;
  selectedBank: string | null = null;

  tableFlag = false;
  fsList: TransferRow[] = [];

  constructor(private router: Router, private datasetService: DatasetService) { }

  ngOnInit(): void {
  }

  recover(): void {
    if (!this.selectedBank) {
      return;
    }
    this.datasetService.loadRaw(this.dataset, {}).then((all: Record<string, TransferRow[]>) => {
      this.fsList = (all && all[this.selectedBank]) || [];
      this.tableFlag = true;
    });
  }

  goToHome(){
    this.router.navigate(['']);
  }

  goHome(): void {
    this.router.navigate(['/']);
  }
}

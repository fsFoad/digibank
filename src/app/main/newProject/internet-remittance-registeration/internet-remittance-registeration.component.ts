import { Component, OnInit } from '@angular/core';
import { Constants } from 'app/main/shared/constants/Constants';
import {Router} from '@angular/router';
import { DatasetService } from '../../shared/services/dataset.service';

@Component({
  selector: 'app-internet-remittance-registeration',
  templateUrl: './internet-remittance-registeration.component.html',
  styleUrls: ['./internet-remittance-registeration.component.scss']
})
export class InternetRemittanceRegisterationComponent implements OnInit {
  readonly dataset = 'account-list-by-bank';
  bankNameList = Constants.bankNameList;
  selectedBank: string | null = null;
  acItems: { value: string, label: string }[] = [];
  organizationalAccount = false;
  constructor(private router: Router, private datasetService: DatasetService) { }

  ngOnInit(): void {
  }

  onBankChange(): void {
    this.acItems = [];
    if (!this.selectedBank) {
      return;
    }
    this.datasetService.loadRaw(this.dataset, {}).then((all: Record<string, { value: string, label: string }[]>) => {
      this.acItems = (all && all[this.selectedBank]) || [];
    });
  }

  onClose(){
    this.router.navigate(['']);
  }

  goHome(): void {
    this.router.navigate(['/']);
  }
}

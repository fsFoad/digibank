import { Component, OnInit } from '@angular/core';
import { Constants } from '../../shared/constants/Constants';
import { DatasetService } from '../../shared/services/dataset.service';
import { Router } from '@angular/router';

interface AccountRow {
  title: string;
  accountNumber: string;
  balance: number;
  blockedAmount: number;
  dateOfLastTurnover: number;
  openingBranch: string;
  openingDate: number;
}

interface LevelRow {
  code: string;
  title: string;
  rows: AccountRow[];
}

/**
 * حساب‌های ریالی بر اساس بانک.
 * کاربر یک بانک را از دیتاست انتخاب می‌کند؛ با زدن «مشاهده» سرفصل‌های حساب همان بانک
 * (و با باز کردن هر سرفصل، حساب‌های آن) از دیتاست load می‌شود.
 */
@Component({
  selector: 'app-rial-account-by-bank',
  templateUrl: './rial-account-by-bank.component.html',
  styleUrls: ['./rial-account-by-bank.component.scss'],
})
export class RialAccountByBankComponent implements OnInit {
  readonly dataset = 'rial-accounts-by-bank';

  banklistConstants = Constants.banklist;
  selectedBank: string | null = null;

  levelRows: LevelRow[] = [];
  loading = false;
  searched = false;

  accountDialogVisible = false;
  selectedAccount: AccountRow | null = null;

  constructor(private datasetService: DatasetService, private router: Router) {}

  ngOnInit(): void {}

  view(): void {
    if (!this.selectedBank) {
      return;
    }
    this.loading = true;
    this.searched = true;
    this.datasetService.loadRaw(this.dataset, {}).then((all: Record<string, LevelRow[]>) => {
      this.levelRows = (all && all[this.selectedBank]) || [];
      this.loading = false;
    });
  }

  showAccount(account: AccountRow): void {
    this.selectedAccount = account;
    this.accountDialogVisible = true;
  }

  goHome(): void {
    this.router.navigate(['/']);
  }
}

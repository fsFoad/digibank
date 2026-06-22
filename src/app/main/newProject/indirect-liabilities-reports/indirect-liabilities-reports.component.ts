import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indirect-liabilities-reports',
  templateUrl: './indirect-liabilities-reports.component.html',
  styleUrls: ['./indirect-liabilities-reports.component.scss']
})
export class IndirectLiabilitiesReportsComponent implements OnInit {
  tableRows: Row[] = createSampleRows();
  constructor() { }

  ngOnInit(): void {
  }

}

interface Row {
  contracNumber?: number;
  facilityOwner?: string;
  contractType?: string;
  debitBalanceForInterest?: number;
  debitBalance?: number;
  penaltyClause?: number;
  penaltyClause2?: number;
  facilityStatus?: string;
}

function createSampleRows(): Row[] {
  const contractTypes = [
    'مضاربه داخلی بخش خصوصی',
    'فروش اقساطی مسکن انفرادی / بخش خصوصی',
    'مرابحه نقدی - تست بتا',
    'مرابحه نسیه - تست بتا',
    'مرابحه امهالی',
    'احداث اماکن مسکونی شهری-حوادث سال ۱۳۹۸',
    'احداث اماکن مسکونی روستایی-حوادث سال ۱۳۹۸',
  ];
  const facilityStatuses = [
    'زنده (عادی)',
    'سررسید گذشته',
  ];
  const debitBalances = [
    0, 500_000_000, 0, 793_236_000, 2_000_986, 2_500_000, 1_900_000,
  ];
  const penaltyClauses = [
    0, 26_576_000, 0, 116_764_000, 55_002_000, 336_667_000, 74_160_000,
  ];
  return [0, 1, 2, 3, 4, 5, 6].map(i => ({
    contractType: contractTypes[i],
    facilityStatus: facilityStatuses[i === 6 ? 1 : 0],
    debitBalance: debitBalances[i],
    penaltyClause: penaltyClauses[i],
    penaltyClause2: i === 6 ? 19_048_000 : 0,
    contracNumber: Math.floor(10_000_000 * Math.random()),
    debitBalanceForInterest: Math.floor(10_000 * Math.random()) * 1_000,
    facilityOwner: 'پرویز خسروی',
  })).map(x => ({ ...x, debitBalanceForInterest: 2 * (x.penaltyClause + x.penaltyClause2) }));
}


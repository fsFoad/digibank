import { Component, OnInit } from '@angular/core';
import { DatasetService } from '../../shared/services/dataset.service';

@Component({
  selector: 'app-indirect-liabilities-reports',
  templateUrl: './indirect-liabilities-reports.component.html',
  styleUrls: ['./indirect-liabilities-reports.component.scss']
})
export class IndirectLiabilitiesReportsComponent implements OnInit {
  tableRows: Row[] = [];
  constructor(private datasetService: DatasetService) { }

  ngOnInit(): void {
    this.datasetService.loadRaw('indirect-liabilities-reports', null).then((lookups: any) => {
      if (lookups) {
        this.tableRows = createRowsFromLookups(lookups);
      }
    });
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

function createRowsFromLookups(lookups: {
  contractTypes: string[];
  facilityStatuses: string[];
  debitBalances: number[];
  penaltyClauses: number[];
  facilityOwner: string;
}): Row[] {
  const { contractTypes, facilityStatuses, debitBalances, penaltyClauses, facilityOwner } = lookups;
  return [0, 1, 2, 3, 4, 5, 6].map(i => ({
    contractType: contractTypes[i],
    facilityStatus: facilityStatuses[i === 6 ? 1 : 0],
    debitBalance: debitBalances[i],
    penaltyClause: penaltyClauses[i],
    penaltyClause2: i === 6 ? 19_048_000 : 0,
    contracNumber: Math.floor(10_000_000 * Math.random()),
    debitBalanceForInterest: Math.floor(10_000 * Math.random()) * 1_000,
    facilityOwner,
  })).map(x => ({ ...x, debitBalanceForInterest: 2 * (x.penaltyClause + x.penaltyClause2) }));
}


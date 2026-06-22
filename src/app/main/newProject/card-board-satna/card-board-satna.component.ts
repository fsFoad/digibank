import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatasetService } from '../../shared/services/dataset.service';

@Component({
  selector: 'app-card-board-satna',
  templateUrl: './card-board-satna.component.html',
  styleUrls: ['./card-board-satna.component.scss']
})
export class CardBoardSatnaComponent implements OnInit {
  tableFlag = false;
  detailsFlag = false;
  tempTable: any;
  satnaRows: SatnaRow[] = [];
  selectedRow: SatnaRow | null = null;

  constructor(private router: Router, private datasetService: DatasetService) { }

  selectRow(row: SatnaRow) {
    this.selectedRow = row;
    this.detailsFlag = true;
  }

  onClose(event: any) {
    if (event === 'close')
      this.detailsFlag = false;
  }

  ngOnInit(): void {
  }

  getSatnaRows(): void {
    this.datasetService.loadRaw('card-board-satna', []).then((data: SatnaRow[]) => {
      this.satnaRows = data;
    });
  }

  goHome(): void {
    this.router.navigate(['/']);
  }
}

export interface SatnaRow {
  id: number;
  temporaryTransferNumber: number;
  sourceAccountNumber: number;
  amounts: number;
  registrar: string;
  des: string;
  status: string;
  remittanceRecipientName: string;
  registrationDate: number;
  ibonOrigin: string;
  verificationCode: number;
  remittancesNumber: string;
  nationalCode: number;
  accountTypeOrigin: string;
  accountTypeDestination: string;
  shahab: number;
  ibonDestination: string;
  postalCode: number;
}


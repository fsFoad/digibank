import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatasetService } from '../../shared/services/dataset.service';

@Component({
  selector: 'app-paya-regular-remittance-cartable',
  templateUrl: './paya-regular-remittance-cartable.component.html',
  styleUrls: ['./paya-regular-remittance-cartable.component.scss']
})
export class PayaRegularRemittanceCartableComponent implements OnInit {
  showTable = true;
  tableData: RegularPayaRow[] = [];
  showDetailsComponent = false;
  selectedRow: RegularPayaRow | null = null;
  constructor(private router: Router, private datasetService: DatasetService) { }

  ngOnInit(): void {
    this.datasetService.loadRaw('paya-regular-remittance-cartable', []).then((data: RegularPayaRow[]) => {
      this.tableData = data;
    });
  }

  selectRow(row: RegularPayaRow): void {
    this.selectedRow = row;
    this.showDetailsComponent = true;
  }

  confirm(confirm: boolean): void {
    this.showDetailsComponent = false;
  }

  goHome(): void {
    this.router.navigate(['/']);
  }
}


export interface RegularPayaRow {
  temporaryRemittanceNumber: number;
  sourceAccountNumber: number;
  destinationShabaNumber: string;
  amount: number;
  startDate: number;
  endDate: number;
  period: string;
  registrar: string;
  dateOfRegistration: number;
  about: string;
  nationalCode: string;
  beneficiaryZipCode: string;
  beneficiaryShahabCode: string;
}

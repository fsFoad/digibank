import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatasetService } from '../../shared/services/dataset.service';


@Component({
  selector: 'app-paya-group-remittance-cartable',
  templateUrl: './paya-group-remittance-cartable.component.html',
  styleUrls: ['./paya-group-remittance-cartable.component.scss']
})
export class PayaGroupRemittanceCartableComponent implements OnInit {
  showTable = true;
  tableData: GroupPayaRow[] = [];
  showDetailsComponent = false;
  selectedRow: GroupPayaRow | null = null;
  constructor(private router: Router, private datasetService: DatasetService) { }

  ngOnInit(): void {
    this.datasetService.loadRaw('paya-group-remittance-cartable', []).then((data: GroupPayaRow[]) => {
      this.tableData = data;
    });
  }

  selectRow(row: GroupPayaRow): void {
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


export interface GroupPayaRow {
  temporaryRemittanceNumber?
  sourceAccountNumber?
  totalAmount?
  effectiveDate?
  status?
  registrar?
  registrationDate?
}


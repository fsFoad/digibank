import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { GroupPayaRow } from '../paya-group-remittance-cartable/paya-group-remittance-cartable.component';
import { DatasetService } from '../../shared/services/dataset.service';

@Component({
  selector: 'app-paya-group-remittance-cartable-details',
  templateUrl: './paya-group-remittance-cartable-details.component.html',
  styleUrls: ['./paya-group-remittance-cartable-details.component.scss'],
  providers: [ConfirmationService],
})
export class PayaGroupRemittanceCartableDetailsComponent implements OnInit {
  @Input() groupPayaRow: GroupPayaRow | null = null;
  @Output() confirm = new EventEmitter<boolean>();
  table1Rows: Table1Row[] = [];
  table2Rows: Table2Row[] = [];
  constructor(private confirmationService: ConfirmationService, private datasetService: DatasetService) { }

  ngOnInit(): void {
    this.datasetService.loadRaw('paya-group-cartable-details').then(d => {
      this.table1Rows = d.table1Rows;
      this.table2Rows = d.table2Rows;
    });
  }

  showConfirmation() {
    const message = `
      مطابق ابلاغیه بانک مرکزی نحوه محاسبه کارمزد 
      حواله گروهی پایا
      به ازای هر ردیف حواله، مبلغ
      ۱٬۰۰۰ ریال
      می‌باشد
      که با تائید نهایی از حساب مبداء برداشت خواهد شد.
`
    this.confirmationService.confirm({
      message,
      accept: () => {
        this.confirm.emit(true)
      }
    });
  }
}


interface Table1Row {
  sourceShaba?
  numberOfRemittanceRows?
  totalAmountOfTheRemittance?
  effectiveDate?
  registrar?
  registrationDate ?
}

interface Table2Row {
  fullName?
  confirmationType?
  confirmationStatus?
  date?
  description?
}
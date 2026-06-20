import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { RegularPayaRow } from '../paya-regular-remittance-cartable/paya-regular-remittance-cartable.component';
import { DatasetService } from '../../shared/services/dataset.service';

@Component({
  selector: 'app-paya-regular-remittance-cartable-details',
  templateUrl: './paya-regular-remittance-cartable-details.component.html',
  styleUrls: ['./paya-regular-remittance-cartable-details.component.scss'],
  providers: [ConfirmationService],
})
export class PayaRegularRemittanceCartableDetailsComponent implements OnInit {
  @Input() regularPayaRow: RegularPayaRow | null = null;
  @Output() confirm = new EventEmitter<boolean>();
  table1Rows: Table1Row[] = [];
  table2Rows: Table2Row[] = [];
  constructor(private confirmationService: ConfirmationService, private datasetService: DatasetService) { }

  ngOnInit(): void {
    this.datasetService.loadRaw('paya-regular-cartable-details').then(d => {
      this.table1Rows = d.table1Rows;
      this.table2Rows = d.table2Rows;
    });
  }

  showConfirmation() {
    const message = `
      مطابق ابلاغیه بانک مرکزی نحوه محاسبه کارمزد حواله پایا
      ۰.۰۱ درصد حواله با حداقل
      ۲٬۰۰۰ ریال و حداکثر کارمزد
      ۲۵٬۰۰۰ ریال می‌باشد که با تائید نهایی از حساب مبداء برداشت خواهد شد.
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
  remittanceRecipient?
  shabaCode?
  bank?
  depositorId?
  amount?
  nationalCode?
  about?
  postalCode?
  shahabCode?
  description?
  allowResubmit?
}

interface Table2Row {
  fullName?
  confirmationType?
  confirmationStatus?
  date?
  description?
}
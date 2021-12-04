import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InternetRemittanceRow } from '../internet-remittance-cartable/internet-remittance-cartable.component';

@Component({
  selector: 'app-internet-remittance-cartable-details',
  templateUrl: './internet-remittance-cartable-details.component.html',
  styleUrls: ['./internet-remittance-cartable-details.component.scss']
})
export class InternetRemittanceCartableDetailsComponent implements OnInit {
  @Input() info: InternetRemittanceRow;
  @Output() confirm = new EventEmitter<boolean | null>();
  table2Rows: Table2Row[] = [1, 2, 3, 4].map(x => ({
    fullName: ['شهاب گودرزی', 'علی حسنی', 'پژمان صباحی', 'سارا تقدمی'][x - 1],
    confirmationStatus: 'بررسی نشده',
    confirmationType: 'اختیاری',
  }));
  constructor() { }

  ngOnInit(): void {
  }

}

interface Table2Row {
  fullName?
  confirmationType?
  confirmationStatus?
  date?
  description?
}
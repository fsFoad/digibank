import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SpecialPaymentRow } from '../special-payment-cartable/special-payment-cartable.component'

@Component({
  selector: 'app-special-payment-cartable-details',
  templateUrl: './special-payment-cartable-details.component.html',
  styleUrls: ['./special-payment-cartable-details.component.scss']
})
export class SpecialPaymentCartableDetailsComponent implements OnInit {
  @Input() row: SpecialPaymentRow | null = null;
  @Output() confirm = new EventEmitter<boolean>();
  approversRows: ApproverRow[] = [1, 2, 3, 4].map(x => ({
    fullName: ['شهاب گودرزی', 'علی حسنی', 'پژمان صباحی', 'سارا تقدمی'][x - 1],
    confirmationStatus: 'بررسی نشده',
    confirmationType: 'اختیاری',
  }));
  constructor() { }

  ngOnInit(): void {
  }

}


interface ApproverRow {
  fullName?
  confirmationType?
  confirmationStatus?
  date?
  description?
}
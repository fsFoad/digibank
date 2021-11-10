import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reliable-remittance-report',
  templateUrl: './reliable-remittance-report.component.html',
  styleUrls: ['./reliable-remittance-report.component.scss']
})
export class ReliableRemittanceReportComponent implements OnInit {
reportTypeList:{ label: string, value: number }[] = [];
bankNameList:{ label: string, value: number }[] = [];
  constructor() { }

  ngOnInit(): void {
    this.reportTypeList = [
      {label: '-', value: 1},
      {label: 'صادره', value: 2},
      {label: 'وارده', value: 3},
    ];
    this.bankNameList = [
      {label: '-', value: 1},
      {label: 'ملی', value: 2},
      {label: 'ملت', value: 3},
      {label: 'صادرات', value: 4},
      {label: 'پاسارگاد', value: 5},
      {label: 'تجارت', value: 6},
    ];
  }

}

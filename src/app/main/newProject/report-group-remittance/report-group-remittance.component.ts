import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-group-remittance',
  templateUrl: './report-group-remittance.component.html',
  styleUrls: ['./report-group-remittance.component.scss']
})
export class ReportGroupRemittanceComponent implements OnInit {
  searchTypeList:{ label: string, value: number }[] = [];
  constructor() { }

  ngOnInit(): void {
    this.searchTypeList = [
      {label: '-', value: 1},
      {label: 'وضعیت فایل', value: 2},
      {label: 'نام فایل', value: 3},
    ];
  }

}

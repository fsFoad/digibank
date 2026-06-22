import { Component, OnInit } from '@angular/core';
import {Constants} from '../../shared/constants/Constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reliable-remittance-report',
  templateUrl: './reliable-remittance-report.component.html',
  styleUrls: ['./reliable-remittance-report.component.scss']
})
export class ReliableRemittanceReportComponent implements OnInit {
reportTypeList:{ label: string, value: number }[] = Constants.reliableRemittanceReport_reportTypeList;
bankNameList=Constants.bankNameList;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.reportTypeList = Constants.reliableRemittanceReport_reportTypeList_x;
  }


  goHome(): void {
    this.router.navigate(['/']);
  }
}

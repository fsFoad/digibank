import { Component, OnInit } from '@angular/core';
import { Constants } from '../../shared/constants/Constants';

@Component({
  selector: 'app-report-group-remittance',
  templateUrl: './report-group-remittance.component.html',
  styleUrls: ['./report-group-remittance.component.scss']
})
export class ReportGroupRemittanceComponent implements OnInit {
  searchTypeList:{ label: string, value: number }[] = Constants.reportGroupRemittance_searchTypeList;
  constructor() { }

  ngOnInit(): void {
    this.searchTypeList = Constants.reportGroupRemittance_searchTypeList_x;
  }

}

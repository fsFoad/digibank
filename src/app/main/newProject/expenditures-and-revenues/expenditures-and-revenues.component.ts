import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { getChartDataForFacilitiesReceived, getChartOptionsForFacilitiesReceived } from '../chart-of-facilities-received/chart-of-facilities-received.component';
import { getChartDataForDepositSources, getChartOptionsForDepositSources, setChartFont } from '../deposit-sources-report/deposit-sources-report.component';

@Component({
  selector: 'app-expenditures-and-revenues',
  templateUrl: './expenditures-and-revenues.component.html',
  styleUrls: ['./expenditures-and-revenues.component.scss']
})
export class ExpendituresAndRevenuesComponent implements OnInit {
  depositSourcesData = getChartDataForDepositSources();
  depositSourcesOptions = customize(getChartOptionsForDepositSources(), 'منابع سپرده');
  facilitiesReceivedData = getChartDataForFacilitiesReceived();
  facilitiesReceivedOptions = customize(getChartOptionsForFacilitiesReceived(), 'تسهیلات دریافتی');
  constructor() {
    setChartFont();
  }

  ngOnInit(): void {
  }

}
function customize(o: Chart.ChartOptions, title: string): Chart.ChartOptions {
  return {
    ...o,
    title: {
      display: true,
      text: title,
      fullWidth: true,
      fontSize: 24,
      fontColor: 'black',
    }
  }
}


import { Component, OnInit } from '@angular/core';
import { Constants } from 'app/main/shared/constants/Constants';

@Component({
  selector: 'app-deposit-sources-report',
  templateUrl: './deposit-sources-report.component.html',
  styleUrls: ['./deposit-sources-report.component.scss']
})
export class DepositSourcesReportComponent implements OnInit {
  data = {
    labels: Constants.acSummaries.map(x => `${x.title} (${x.accountNumber})`),
    datasets: [
      {
        data: Constants.acSummaries.map(x => x.balance),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#aea00a",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#fef00f",
        ]
      }]
  };
  chartOptions = {
    legend: {
      position: 'right',
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}

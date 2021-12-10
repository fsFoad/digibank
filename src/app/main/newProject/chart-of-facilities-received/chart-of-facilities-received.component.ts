import { Component, OnInit } from '@angular/core';
import { Constants } from 'app/main/shared/constants/Constants';
import { AddCommaPipe } from 'app/main/shared/pipes/add-comma.pipe';
import { faDigits, setChartFont } from '../deposit-sources-report/deposit-sources-report.component';

@Component({
  selector: 'app-chart-of-facilities-received',
  templateUrl: './chart-of-facilities-received.component.html',
  styleUrls: ['./chart-of-facilities-received.component.scss']
})
export class ChartOfFacilitiesReceivedComponent implements OnInit {
  data = getChartDataForFacilitiesReceived();
  chartOptions: Chart.ChartOptions = getChartOptionsForFacilitiesReceived()
  constructor() {
    setChartFont();
  }
  ngOnInit(): void {
  }

}

export function getChartOptionsForFacilitiesReceived(): Chart.ChartOptions {
  return {
    legend: {
      labels: {
        fontColor: 'black',
        fontSize: 15
      },
      position: 'right',
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          let label = data.labels[tooltipItem.index];
          let datasetLabel = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
          let currencyPipe = new AddCommaPipe();
          let formattedNumber = currencyPipe.transform(datasetLabel as any);
          return label + ': ' + faDigits(formattedNumber) + ' ریال';
        },
      }
    }
  };
}

export function getChartDataForFacilitiesReceived() {
  return {
    labels: Constants.tashilats.map(x => `${x.relevantUnit} (${x.tashilatType})`),
    datasets: [
      {
        data: Constants.tashilats.map(x => x.amount),
        backgroundColor: [
          "hsl(43, 100%, 67%)",
          "hsl(90, 82%, 57%)",
          "hsl(347, 100%, 70%)",
          "hsl(204, 82%, 57%)",
        ],
        hoverBackgroundColor: [
          "hsl(43, 100%, 77%)",
          "hsl(90, 82%, 67%)",
          "hsl(347, 100%, 80%)",
          "hsl(204, 82%, 67%)",
        ]
      }
    ]
  };
}


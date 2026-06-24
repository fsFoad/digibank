import { Component, OnInit } from '@angular/core';
import { Constants } from 'app/main/shared/constants/Constants';
import { AddCommaPipe } from 'app/main/shared/pipes/add-comma.pipe';
import * as Chart from 'chart.js';
import { Router } from '@angular/router';
import { DatasetService } from '../../shared/services/dataset.service';

export const rlm = '\u200f';
export const lrm = '\u200e';
export const ltre = '\u202a';
export const rtle = '\u202b';
export const popd = '\u202c';
export const nads = '⁮\u206e';

export function faDigits(s: string): string {
  if (!s) {
    return s;
  }
  return s
    .replace(/0/g, '۰')
    .replace(/1/g, '۱')
    .replace(/2/g, '۲')
    .replace(/3/g, '۳')
    .replace(/4/g, '۴')
    .replace(/5/g, '۵')
    .replace(/6/g, '۶')
    .replace(/7/g, '۷')
    .replace(/8/g, '۸')
    .replace(/9/g, '۹')
  ;
}

interface DepositSource {
  title: string;
  accountNumber: string;
  balance: number;
}

@Component({
  selector: 'app-deposit-sources-report',
  templateUrl: './deposit-sources-report.component.html',
  styleUrls: ['./deposit-sources-report.component.scss']
})
export class DepositSourcesReportComponent implements OnInit {
  readonly dataset = 'deposit-sources-report';
  bankNameList = Constants.bankNameList;
  selectedBank: string | null = null;

  chartFlag = false;
  data: any = null;
  chartOptions: Chart.ChartOptions = getChartOptionsForDepositSources();

  constructor(private router: Router, private datasetService: DatasetService) {
    setChartFont();
  }

  ngOnInit(): void {
  }

  view(): void {
    if (!this.selectedBank) {
      return;
    }
    this.datasetService.loadRaw(this.dataset, {}).then((all: Record<string, DepositSource[]>) => {
      const rows = (all && all[this.selectedBank]) || [];
      this.data = getChartDataForDepositSources(rows);
      this.chartFlag = true;
    });
  }

  goHome(): void {
    this.router.navigate(['/']);
  }
}

export function getChartOptionsForDepositSources(): Chart.ChartOptions {
  return {
    legend: {
      labels: {
        fontColor: 'black',
        fontSize: 15
      },
      position: 'right',
      // rtl: true,
      // textDirection: 'rtl',
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

export function getChartDataForDepositSources(
  rows: DepositSource[] = []
) {
  return {
    labels: rows.map(x => `${x.title} (${ltre}${faDigits(x.accountNumber)}${popd}${rlm})`),
    datasets: [
      {
        data: rows.map(x => x.balance),
        backgroundColor: [
          "hsl(347, 100%, 70%)",
          "hsl(204, 82%, 57%)",
          "hsl(43, 100%, 67%)",
          "hsl(90, 82%, 57%)",
        ],
        hoverBackgroundColor: [
          "hsl(347, 100%, 80%)",
          "hsl(204, 82%, 67%)",
          "hsl(43, 100%, 77%)",
          "hsl(90, 82%, 67%)",
        ]
      }
    ]
  };
}

export  function setChartFont() {
  Chart.defaults.global.defaultFontFamily = 'iranyekan';
}

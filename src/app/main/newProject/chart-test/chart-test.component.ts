import { Component, OnInit } from '@angular/core';
import { DatasetService } from '../../shared/services/dataset.service';

@Component({
  selector: 'app-chart-test',
  templateUrl: './chart-test.component.html',
  styleUrls: ['./chart-test.component.scss']
})
export class ChartTestComponent implements OnInit {
  data: any = { labels: [], datasets: [] };

  constructor(private datasetService: DatasetService) { }

  ngOnInit(): void {
    this.datasetService.loadRaw('chart-test', { labels: [], datasets: [] }).then((data: any) => {
      this.data = data;
    });
  }

}

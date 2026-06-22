import { Component, OnInit } from '@angular/core';
import {Constants} from '../../shared/constants/Constants';
import { DatasetService } from '../../shared/services/dataset.service';

@Component({
  selector: 'app-soorat-hesab',
  templateUrl: './soorat-hesab.component.html',
  styleUrls: ['./soorat-hesab.component.scss']
})
export class SooratHesabComponent implements OnInit {
  showTable = false;
  acItems=Constants.acItems;
  organizationalUnit=Constants.organizationalUnit;
  tableData: any[] = [];

  // acItems = [
  //   { value: '', label: '54654687' },
  //   { value: '', label: '32454465' },
  //   { value: '', label: '97897978' },
  // ]
  constructor(private datasetService: DatasetService) { }

  ngOnInit(): void {
    this.datasetService.loadRaw('soorat-hesab', []).then((data: any[]) => {
      this.tableData = data;
    });
  }

}

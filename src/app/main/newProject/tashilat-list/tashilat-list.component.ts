import { Component, OnInit } from '@angular/core';
import { Constants } from 'app/main/shared/constants/Constants';


@Component({
  selector: 'app-tashilat-list',
  templateUrl: './tashilat-list.component.html',
  styleUrls: ['./tashilat-list.component.scss']
})
export class TashilatListComponent implements OnInit {
  tableFlag = false;
  unitItems = Constants.organizationalUnit;
  fsList = Constants.tashilats;

  constructor() {
  }

  ngOnInit(): void {
  }

}

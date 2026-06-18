import { Component, OnInit } from '@angular/core';
import {Constants} from '../../shared/constants/Constants';

@Component({
  selector: 'app-group-ghabz',
  templateUrl: './group-ghabz.component.html',
  styleUrls: ['./group-ghabz.component.scss']
})
export class GroupGhabzComponent implements OnInit {
  acItems = Constants.acItems;
  constructor() { }

  ngOnInit(): void {
  }

}

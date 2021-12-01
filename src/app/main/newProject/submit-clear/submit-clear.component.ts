import { Component, OnInit } from '@angular/core';
import {Constants} from '../../shared/constants/Constants';

@Component({
  selector: 'app-submit-clear',
  templateUrl: './submit-clear.component.html',
  styleUrls: ['./submit-clear.component.scss']
})
export class SubmitClearComponent implements OnInit {
  acItems = Constants.acItems;
  constructor() { }

  ngOnInit(): void {
  }

}

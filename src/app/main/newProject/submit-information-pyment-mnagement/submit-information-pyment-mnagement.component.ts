import { Component, OnInit } from '@angular/core';
import { Constants } from '../../shared/constants/Constants';

@Component({
  selector: 'app-submit-information-pyment-mnagement',
  templateUrl: './submit-information-pyment-mnagement.component.html',
  styleUrls: ['./submit-information-pyment-mnagement.component.scss']
})
export class SubmitInformationPymentMnagementComponent implements OnInit {
  dropList:{ label: string, value: number }[] = Constants.submitInformationPymentMnagement_dropList;

  constructor() { }

  ngOnInit(): void {
    this.dropList = Constants.submitInformationPymentMnagement_dropList_x;
  }

}

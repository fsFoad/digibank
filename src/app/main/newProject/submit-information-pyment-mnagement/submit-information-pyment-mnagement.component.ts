import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit-information-pyment-mnagement',
  templateUrl: './submit-information-pyment-mnagement.component.html',
  styleUrls: ['./submit-information-pyment-mnagement.component.scss']
})
export class SubmitInformationPymentMnagementComponent implements OnInit {
  dropList:{ label: string, value: number }[] = [];

  constructor() { }

  ngOnInit(): void {
    this.dropList = [
      {label: '-', value: 1},
      {label: 'حقیقی', value: 2},
      {label: 'حقوقی', value: 3},
    ];
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-board',
  templateUrl: './card-board.component.html',
  styleUrls: ['./card-board.component.scss']
})
export class CardBoardComponent implements OnInit {
  tableFlag = false;
  fsList: {
    applicationNumber: number, operationType: string, amount: number,
    result: string, time: number
  }[] = [
    {
      'applicationNumber': 10000026, 'operationType': 'حواله سانتا',
      'amount': 1000000000, 'result': '*درانتظار تایید', 'time': 102000
    },
    {
      'applicationNumber': 10000027, 'operationType': 'انتقال وجه داخل بانک'
      , 'amount': 150000000, 'result': '*انجام موفق', 'time': 112400
    },
    {
      'applicationNumber': 10000028, 'operationType': 'پرداخت قبض'
      , 'amount': 120000000, 'result': '*انجام ناموفق', 'time': null
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

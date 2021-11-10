import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-board-ghoboz',
  templateUrl: './card-board-ghoboz.component.html',
  styleUrls: ['./card-board-ghoboz.component.scss']
})
export class CardBoardGhobozComponent implements OnInit {
  detailsFlag = false;
  tempTable;
  fsList: {
    temporaryApplicationNumber: number, companyName: string, amounts: number,
    dateSubmit: number, ghabzType: string, registrar: string, accountnNumberdeterminesAmount:number
    ,applicationType:string
  }[] = [
    {
      'temporaryApplicationNumber': 968615, 'companyName': 'نوین سازان'
      , 'amounts': 1000, 'dateSubmit': 13990812, 'ghabzType': 'عمومی', 'registrar': 'علی محمدی',
     accountnNumberdeterminesAmount:2556625400, applicationType:'پرداخت قبض گروهی'
    },
    {
      'temporaryApplicationNumber': 964213, 'companyName': 'دیاموند'
      , 'amounts': 28000, 'dateSubmit': 14000205, 'ghabzType': 'آب', 'registrar': 'محمد سروری',
     accountnNumberdeterminesAmount:8556264500, applicationType:'پرداخت قبض گروهی'
    }, {
      'temporaryApplicationNumber': 968425, 'companyName': 'زرین',
      'amounts': 1000, 'dateSubmit': 14000501, 'ghabzType': 'سایر قرار دادی', 'registrar': 'فرهاد کشوری',
      accountnNumberdeterminesAmount:5535941870, applicationType:'پرداخت قبض گروهی'

    },
  ];
  person;
  constructor() { }

  ngOnInit(): void {
  }

  editServiceRow(servise) {
    this.person = {
      temporaryApplicationNumber: 0,
      companyName: '',
      amounts: 0,
      dateSubmit: 0,
      ghabzType: '',
      registrar: '',
      registrationDate:0,
      accountnNumberdeterminesAmount:0,
      applicationType:''

    };
    this.fsList = servise;
    debugger
    this.detailsFlag = true;
  }
  onClose(event: any){
    if (event==='close')
      this.detailsFlag = false;
  }
}

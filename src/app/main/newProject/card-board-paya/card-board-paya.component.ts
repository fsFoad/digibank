import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-board-paya',
  templateUrl: './card-board-paya.component.html',
  styleUrls: ['./card-board-paya.component.scss']
})
export class CardBoardPayaComponent implements OnInit {


  tableFlag = false;
  detailsFlag = false;
  tempTable;
  fsList: {
    TemporaryTransferNumber: number, SourceAccountNumber: number, amounts: number,
    dateEffective: number, status: string, registrar: string, registrationDate: number,ibon:string,verificationCode:number,
    remittancesNumber:string,table1RecipientRemittance:string
  }[] = [

    {
      'TemporaryTransferNumber': 958615, 'SourceAccountNumber': 2513350448275
      , 'amounts': 2625000, 'dateEffective': 13990812, 'status': 'امضا شده', 'registrar': 'علی محمدی',
      'registrationDate': 13990812,ibon:'IR830120000000000055771565',verificationCode:4872,remittancesNumber:'1',
      table1RecipientRemittance:'سروش محسنی'
    },
    {
      'TemporaryTransferNumber': 954213, 'SourceAccountNumber': 8506321596425
      , 'amounts': 100, 'dateEffective': 14000205, 'status': 'بررسی نشده', 'registrar': 'محمد سروری',
      'registrationDate': 14000205,ibon:'IR895870000000000055662389',verificationCode:6924,remittancesNumber:'5',
      table1RecipientRemittance:'حمید تقی زاده'
    }, {
      'TemporaryTransferNumber': 958425, 'SourceAccountNumber': 1106354796009,
      'amounts': 1000000, 'dateEffective': 14000501, 'status': 'بررسی نشده', 'registrar': 'فرهاد کشوری',
      'registrationDate': 14000501,ibon:'IR895870000000000058566589',verificationCode:5485,remittancesNumber:'3',
      table1RecipientRemittance:'هومن راد'

    },
  ];
person;
  constructor() {
  }

  editServiceRow(servise) {
    this.person = {
      TemporaryTransferNumber: 0,
      SourceAccountNumber: 0,
      amounts: 0,
      dateEffective: 0,
      status: '',
      registrar: '',
      registrationDate:0,
      iban:'',
      verificationCode:0,
      remittancesNumber:''

    };
    this.fsList = servise;
    this.detailsFlag = true;
  }
  onClose(event: any){
    if (event==='close')
    this.detailsFlag = false;
  }
  ngOnInit(): void {
  }

}

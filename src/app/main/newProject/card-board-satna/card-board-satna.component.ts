import { Component, OnInit } from '@angular/core';
import {ConfirmationService} from "primeng/api";

@Component({
  selector: 'app-card-board-satna',
  templateUrl: './card-board-satna.component.html',
  styleUrls: ['./card-board-satna.component.scss']
})
export class CardBoardSatnaComponent implements OnInit {
  tableFlag = false;
  detailsFlag = false;
  tempTable;
  fsList: {
    TemporaryTransferNumber: number, SourceAccountNumber: number, amounts: number,registrar:string,
    des: string, status: string, remittanceRecipientName: string, registrationDate: number,ibonOrigin:string,verificationCode:number,
    remittancesNumber:string,nationalCode:number,accountTypeOrigin:string,accountTypeDestination:string,shahab:number,
    ibonDestination:string,postalCode:number
  }[] = [

    {
      'TemporaryTransferNumber': 325615, 'SourceAccountNumber': 2513350448275,'registrar':'رامین کوهی'
      , 'amounts': 2500000, 'des': '', 'status': 'بررسی نشده', 'remittanceRecipientName': 'علی رضا رضایی',
      'registrationDate': 13990812,ibonOrigin:'IR830120000000000055771565',verificationCode:4872,remittancesNumber:'1',
      nationalCode:2251548256,'accountTypeOrigin':'جاری','accountTypeDestination':'قرض الحسنه',
      'shahab':1000000090280541,'ibonDestination':'IR860250000000000051532855','postalCode':4561238525
    },
    {
      'TemporaryTransferNumber': 326213, 'SourceAccountNumber': 8506321596425,'registrar':'شهاب شکوری'
      , 'amounts': 200000, 'des': '', 'status': 'بررسی نشده', 'remittanceRecipientName': 'محمد سروستانی',
      'registrationDate': 14000205,ibonOrigin:'IR895870000000000055662389',verificationCode:6924,remittancesNumber:'5',
      nationalCode:8854245215,'accountTypeOrigin':'قرض الحسنه','accountTypeDestination':'قرض الحسنه',
      'shahab':1000000020890487,'ibonDestination':'IR485690000000000052698855','postalCode':4561954865
    }, {
      'TemporaryTransferNumber': 302425, 'SourceAccountNumber': 1106354796009,'registrar':'مهدی آل منصور' ,
      'amounts': 1000000, 'des': '', 'status': 'بررسی نشده', 'remittanceRecipientName': 'مصطفی کاویانی',
      'registrationDate': 14000501,ibonOrigin:'IR895870000000000058566589',verificationCode:5485,remittancesNumber:'3',
      nationalCode:2254814528,'accountTypeOrigin':'سپرده کوتاه مدت','accountTypeDestination':'قرض الحسنه',
      'shahab':1000000070450277,'ibonDestination':'IR854690000000000052624535','postalCode':4567645825
    },
  ];
  person;
  constructor(


  ) {

  }

  editServiceRow(servise) {
    this.person = {
      TemporaryTransferNumber: 0,
      SourceAccountNumber: 0,
      amounts: 0,
      des: 0,
      status: '',
      remittanceRecipientName: '',
      registrationDate:0,
      iban:'',
      verificationCode:0,
      remittancesNumber:''

    };
    this.fsList = servise;
    debugger
    this.detailsFlag = true;
  }
  onClose(event: any){
    if (event==='close')
      this.detailsFlag = false;
  }
  ngOnInit(): void {
  }

}

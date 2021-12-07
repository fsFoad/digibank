import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-personal-entity-list',
  templateUrl: './personal-entity-list.component.html',
  styleUrls: ['./personal-entity-list.component.scss']
})
export class PersonalEntityListComponent implements OnInit {
  detailsFlag = false;
  person;
  rows: Row[] = [
    {
      fullName: 'پژمان سهرابی',
      registrationDate: 14000610,
      contactNumber: '09006489207',
      fieldOfActivity: 'حقیقی',
      relationshipType: 'کارمند',
    },
    {
      fullName: 'کامران گیلانی',
      registrationDate: 14000721,
      contactNumber: '09016485057',
      fieldOfActivity: 'حقیقی',
      relationshipType: 'کارمند',
    },
    {
      fullName: 'هوشنگ مقتصد',
      registrationDate: 14000819,
      contactNumber: '09338854727',
      fieldOfActivity: 'حقیقی',
      relationshipType: 'کارمند',
    },
    {
      fullName: 'کارگزاری بیمه سامان',
      registrationDate: 14000910,
      contactNumber: '09016485057',
      fieldOfActivity: 'حقوقی',
      relationshipType: 'نمایندگی بیمه',
    },
    {
      fullName: 'تامین کننده مواد اولیه',
      registrationDate: 14000910,
      contactNumber: '021-88584420',
      fieldOfActivity: 'حقوقی',
      relationshipType: 'تامین کننده',
    },
  ];
  fsList: {
    customerName: string,
    customerType: string,
    'relationshipType': string,
    nationalCode: string,
    registrationDate: number,
    organizationalRole: string,
    personalCode: number,
    banck: string,
    firstName: string,
    lastName: string,
    fatherName: string,
    NumberShenasname: number,
    DateShenasname: number,
    seriShenasname: string,
    addadShenasname: string,
    seryalShenasname: string,
    seryalkartMeli: string,
    shenasnameType: string,
    city: string,
    country: string,
    religion: string,
    sect: string,
    residence: string,
    EnDate: string,
    EnName: string,
    EnFatherName: string,
    erjaCode: string,
    eduMaghta: string,
    eduReshte: string,
    eduGraesh: string,
    eduMoaseseType: string,
    eduMoaseseName: string,
    startDate: number,
    endDate: number,
    recruitmentType: string,
    post: string,
    vahed: string,
    sahmie: string,
    tedadFamily: number,
    tedadChild: number,
    tedadKefalat: number,
    contactNumber:string,

  }[] = [
    {
      'customerName': 'پژمان سهرابی',
      'registrationDate': 14000610,
      'contactNumber': '09006489207',
      'customerType': 'حقیقی',
      'relationshipType': 'کارمند',
      'nationalCode': '2235425126',
      'organizationalRole': 'مدیر عامل',
      'personalCode': 12400,
      'banck': '1',
      firstName: 'پژمان',
      lastName: 'سهرابی',
      fatherName: 'فریدون',
      NumberShenasname: number,
      DateShenasname: number,
      seriShenasname: string,
      addadShenasname: string,
      seryalShenasname: string,
      seryalkartMeli: string,
      shenasnameType: string,
      city: string,
      country: string,
      religion: string,
      sect: string,
      residence: string,
      EnDate: string,
      EnName: string,
      EnFatherName: string,
      erjaCode: string,
      eduMaghta: string,
      eduReshte: string,
      eduGraesh: string,
      eduMoaseseType: string,
      eduMoaseseName: string,
      startDate: number,
      endDate: number,
      recruitmentType: string,
      post: string,
      vahed: string,
      sahmie: string,
      tedadFamily: number,
      tedadChild: number,
      tedadKefalat: number,
      contactNumber:string,
      fieldOfActivity:string,
      relationshipType:string
    },
    {
      fullName: 'کامران گیلانی',
      registrationDate: 14000721,
      contactNumber: '09016485057',
      customerType: 'حقیقی',
      relationshipType: 'کارمند',
    },
    {
      fullName: 'هوشنگ مقتصد',
      registrationDate: 14000819,
      contactNumber: '09338854727',
      customerType: 'حقیقی',
      relationshipType: 'کارمند',
    },
    {
      fullName: 'کارگزاری بیمه سامان',
      registrationDate: 14000910,
      contactNumber: '09016485057',
      customerType: 'حقوقی',
      relationshipType: 'نمایندگی بیمه',
    },
    {
      fullName: 'تامین کننده مواد اولیه',
      registrationDate: 14000910,
      contactNumber: '021-88584420',
      customerType: 'حقوقی',
      relationshipType: 'تامین کننده',
    },
  ];
  selectedRow: Row;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  selectRow(servise): void {
    this.person = {
      customerName: '',
      customerType: '',
      nationalCode: '',
      registrationDate: 0,
      organizationalRole: '',
      personalCode: 0,
      banck: '',
      firstName: '',
      lastName: '',
      fatherName: '',
      NumberShenasname: 0,
      DateShenasname: 0,
      seriShenasname: '',
      addadShenasname: '',
      seryalShenasname: '',
      seryalkartMeli: '',
      shenasnameType: '',
      city: '',
      country: '',
      religion: '',
      sect: '',
      residence: '',
      EnDate: '',
      EnName: '',
      EnFatherName: '',
      erjaCode: '',
      eduMaghta: '',
      eduReshte: '',
      eduGraesh: '',
      eduMoaseseType: '',
      eduMoaseseName: '',
      startDate: 0,
      endDate: 0,
      recruitmentType: '',
      post: '',
      vahed: '',
      sahmie: '',
      tedadFamily: 0,
      tedadChild: 0,
      tedadKefalat: 0,
      contactNumber:'',
      fieldOfActivity:'',
      relationshipType:''

    };
    this.fsList = servise;
    debugger
    this.detailsFlag = true;
  }
}

interface Row {
  fullName
  registrationDate
  contactNumber
  fieldOfActivity
  relationshipType
}

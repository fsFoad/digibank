import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  selectedRow: Row;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  selectRow(servise): void {
    this.person = {
      customerName: '',
      date: '',
      phoneNumber: 0,
      customerType: '',
      shipType: '',
      nationalCode: '',
      registrationDate:0,
      accountnNumberdeterminesAmount:0,
      applicationType:''

    };
  }
}

interface Row {
  fullName
  registrationDate
  contactNumber
  fieldOfActivity
  relationshipType
}

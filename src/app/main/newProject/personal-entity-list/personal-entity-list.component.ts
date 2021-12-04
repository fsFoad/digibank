import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-entity-list',
  templateUrl: './personal-entity-list.component.html',
  styleUrls: ['./personal-entity-list.component.scss']
})
export class PersonalEntityListComponent implements OnInit {
  rows: Row[] = [
    {
      fullName: 'پژمان سهرابی',
      registrationDate: 14000910,
      contactNumber: '09006489207',
      fieldOfActivity: 'فرهنگ',
      relationshipType: '',
    },
    {
      fullName: 'کامران گیلانی',
      registrationDate: 14000721,
      contactNumber: '09016485057',
      fieldOfActivity: 'اقتصاد',
      relationshipType: '',
    },
    {
      fullName: 'هوشنگ مقتصد',
      registrationDate: 14000819,
      contactNumber: '09338854727',
      fieldOfActivity: 'ورزش',
      relationshipType: '',
    },
  ];
  selectedRow: Row;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  selectRow(row: Row): void {
    this.selectedRow = row;
    this.router.navigate(['/person-editor']);
  }
}

interface Row {
  fullName
  registrationDate
  contactNumber
  fieldOfActivity
  relationshipType
}
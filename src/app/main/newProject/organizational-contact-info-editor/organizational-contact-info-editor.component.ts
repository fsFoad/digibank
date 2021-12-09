import { Component, OnInit } from '@angular/core';
import {Constants} from '../../shared/constants/Constants';

@Component({
  selector: 'app-organizational-contact-info-editor',
  templateUrl: './organizational-contact-info-editor.component.html',
  styleUrls: ['./organizational-contact-info-editor.component.scss']
})
export class OrganizationalContactInfoEditorComponent implements OnInit {
  contactTypeGroups =Constants.contactTypeGroups;
  contactTypes =Constants.contactTypes;
  nahveTasarofs = Constants.nahveTasarofs;



  table1Rows = [
    {
      phoneNumber: '۱۲۳۴۵۶۷۸۹۰',
      startDate: '۱۴۰۰/۰۲/۲۵',
      endDate: '۱۴۰۰/۰۲/۲۵',
    }
  ];

  table2Rows = [1].map(i => ({
    province: 'تهران',
    city: 'تهران',
    region: '۴',
    addressDescription: '',
    postalCode: '',
    startDate: '۱۴۰۰/۰۲/۲۵',
    endDate: '۱۴۰۰/۰۲/۲۵',
  }));

  constructor() { }

  ngOnInit(): void {
  }

}


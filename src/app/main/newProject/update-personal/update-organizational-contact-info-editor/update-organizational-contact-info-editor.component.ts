import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-organizational-contact-info-editor',
  templateUrl: './update-organizational-contact-info-editor.component.html',
  styleUrls: ['./update-organizational-contact-info-editor.component.scss']
})
export class UpdateOrganizationalContactInfoEditorComponent implements OnInit {
  contactTypeGroups = [
    { name: 'نشانی' },
    { name: 'تلفن ثابت' },
    { name: 'تلفن همراه' },
    { name: 'دورنگار' },
    { name: 'پست الکترونیک' },
    { name: 'صندوق پستی' },
    { name: 'آدرس وب سایت' },
  ];
  contactTypes = [
    { name: 'محل کار' },
    { name: 'محل سکونت' },
  ];

  addressTypes = [
    { name: 'محل کار' },
    { name: 'محل سکونت' },
  ];

  nahveTasarofs = [
    { name: 'ملکی' },
    { name: 'استیجاری' },
    { name: 'وقفی' },
  ];

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


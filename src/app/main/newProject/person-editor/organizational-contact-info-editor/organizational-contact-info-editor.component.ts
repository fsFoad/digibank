import {Component, Input, OnInit, Output} from '@angular/core';
import {Constants} from '../../../shared/constants/Constants';
import {AddressInfo, ContactInfo} from '../../models/DigiBankModel';

@Component({
  selector: 'app-organizational-contact-info-editor',
  templateUrl: './organizational-contact-info-editor.component.html',
  styleUrls: ['./organizational-contact-info-editor.component.scss']
})
export class OrganizationalContactInfoEditorComponent implements OnInit {
  contactTypeGroups =Constants.contactTypeGroups;
  contactTypes =Constants.contactTypes;
  nahveTasarofs = Constants.nahveTasarofs;
  province = Constants.provinceList;
  city = Constants.cityList;
  mantaghe = Constants.mantaghe;
  TBListContact:ContactInfo[] = [];
  TBListAddress:AddressInfo[] = [];
  contactAddressInfoFlag=true;
  contactInfoFlag=false
  addressInfoFlag=false
  table1Rows = [
    // {
    //   phoneNumber: '۱۲۳۴۵۶۷۸۹۰',
    //   startDate: '۱۴۰۰/۰۲/۲۵',
    //   endDate: '۱۴۰۰/۰۲/۲۵',
    // }
  ];

  table2Rows;
  // = [1].map(i => ({
  //   province: 'تهران',
  //   city: 'تهران',
  //   region: '۴',
  //   addressDescription: '',
  //   postalCode: '',
  //   startDate: '۱۴۰۰/۰۲/۲۵',
  //   endDate: '۱۴۰۰/۰۲/۲۵',
  // }));

  constructor() { }

  ngOnInit(): void {
  }
  createContactInfo(){
    this.contactAddressInfoFlag=false;
    this.contactInfoFlag = true;
  }
  createAddressInfo(){
    this.contactAddressInfoFlag=false;
    this.addressInfoFlag = true;

  }
  onClose() {
    this.contactAddressInfoFlag=true;
    this.contactInfoFlag = false;
    this.addressInfoFlag = false;

    }

  addItemContact(newItemContact: ContactInfo[]){
    this.TBListContact.push(...newItemContact);
  }
  addItemAddress(newItemAddress: AddressInfo[]){
    this.TBListAddress.push(...newItemAddress);
  }
}


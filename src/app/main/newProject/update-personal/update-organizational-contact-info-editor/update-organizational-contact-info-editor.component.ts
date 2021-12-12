import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Constants} from '../../../shared/constants/Constants';
import {AddressInfo, ContactInfo} from '../../models/DigiBankModel';

@Component({
  selector: 'app-update-organizational-contact-info-editor',
  templateUrl: './update-organizational-contact-info-editor.component.html',
  styleUrls: ['./update-organizational-contact-info-editor.component.scss']
})
export class UpdateOrganizationalContactInfoEditorComponent implements OnInit {
  @Input() inputIdentity
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

   public form: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      nationalCode: [''],
      erjaCode: [''],
      title: [''],
      contactTypeGroups: [''],
      contactsType: [''],
      contactsTypeAddress: [''],
      nahveTasarofs: [''],


    });
  }

  ngOnInit(): void {
  debugger

    this.TBListAddress = [1].map(i => ({
      contactTypes:this.inputIdentity.contactTypes,
      province:this.inputIdentity.contactProvince,
      postalCode: this.inputIdentity.postalCode,
      city: this.inputIdentity.contactCity,
      desAddress:this.inputIdentity.addressDescription,
      mantaghe:this.inputIdentity.mantaghe,
      phoneNumber:this.inputIdentity.mantaghe,


    }));
    this.TBListContact = [
      {
        contactTypeGroups:this.inputIdentity.contactTypeGroups,
        contactTypes:this.inputIdentity.contactTypes,
        discContact:this.inputIdentity.phoneNumber,

      }
    ];
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

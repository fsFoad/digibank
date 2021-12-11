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

  table1Rows;
  table2Rows;






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
    this.form.controls['nationalCode'].patchValue(this.inputIdentity.nationalCode)
    this.form.controls['erjaCode'].patchValue(this.inputIdentity.erjaCode)
    this.form.controls['contactTypeGroups'].patchValue(this.inputIdentity.contactTypeGroups)
    this.form.controls['contactsType'].patchValue(this.inputIdentity.contactsType)
    this.form.controls['contactsTypeAddress'].patchValue(this.inputIdentity.contactsType)
    this.form.controls['nahveTasarofs'].patchValue(this.inputIdentity.nahveTasarofs)
    this.table2Rows = [1].map(i => ({

      province:this.inputIdentity.contactProvince,
      city: this.inputIdentity.contactCity,
      region: this.inputIdentity.region,
      addressDescription:this.inputIdentity.addressDescription ,
      postalCode: this.inputIdentity.postalCode,
      startDate: this.inputIdentity.contactsStartDate,
      endDate: this.inputIdentity.contactsEndDate,
    }));
    this.table1Rows = [
      {
        phoneNumber: this.inputIdentity.phoneNumber,
        startDate: this.inputIdentity.contactStartDate,
        endDate: this.inputIdentity.contactEndDate,
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


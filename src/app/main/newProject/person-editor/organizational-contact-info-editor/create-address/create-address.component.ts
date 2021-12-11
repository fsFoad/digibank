import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Constants} from '../../../../shared/constants/Constants';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AddressInfo, ContactInfo} from '../../../models/DigiBankModel';

@Component({
  selector: 'app-create-address',
  templateUrl: './create-address.component.html',
  styleUrls: ['./create-address.component.scss']
})
export class CreateAddressComponent implements OnInit {
  @Output() close = new EventEmitter<string>();
  @Output() myListAddress: EventEmitter<AddressInfo[]> = new EventEmitter()

  contactTypes =Constants.contactTypes;
  cityList = Constants.cityList;
  provinceList = Constants.provinceList;
  mantaghe = Constants.mantaghe;
  nahveTasarofs = Constants.nahveTasarofs;
  TBListAddress:AddressInfo[]=[]

  public form: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      contactTypes:[''],
      province:[''],
      city:[''],
      desAddress:[''],
      mantaghe:[''],
      postalCode:[''],
      phoneNumber:[''],
      nahveTasarofs:[''],
      // startDate:null,
      // endDate:null
    });
  }
  ngOnInit(): void {
  }
  onClose() {
    this.close.emit('close');
  }
  Confirmation(){
    this.TBListAddress.push(this.form.value);
    this.myListAddress.emit(this.TBListAddress)
    this.close.emit('close');
  }
}

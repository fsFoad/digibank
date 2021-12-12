import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AddressInfo} from '../../../models/DigiBankModel';
import {Constants} from '../../../../shared/constants/Constants';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.scss']
})
export class UpdateAddressComponent implements OnInit {
  @Output() close = new EventEmitter<string>();
  @Output() myListUpdateAddress: EventEmitter<AddressInfo[]> = new EventEmitter()

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
    this.myListUpdateAddress.emit(this.TBListAddress)
    this.close.emit('close');
  }
}

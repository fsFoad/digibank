import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Constants} from '../../../../shared/constants/Constants';

@Component({
  selector: 'app-create-address',
  templateUrl: './create-address.component.html',
  styleUrls: ['./create-address.component.scss']
})
export class CreateAddressComponent implements OnInit {
  @Output() close = new EventEmitter<string>();

  contactTypes =Constants.contactTypes;
  cityList = Constants.cityList;
  provinceList = Constants.provinceList;
  Mantaghe = Constants.Mantaghe;
  nahveTasarofs = Constants.nahveTasarofs;

  constructor() { }

  ngOnInit(): void {
  }
  onClose() {
    this.close.emit('close');
  }
}

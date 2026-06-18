import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Constants} from '../../../shared/constants/Constants';
import {FormBuilder, FormGroup} from '@angular/forms';
import { RegistrationInfo} from '../../models/DigiBankModel';

@Component({
  selector: 'app-create-registration-info',
  templateUrl: './create-registration-info.component.html',
  styleUrls: ['./create-registration-info.component.scss']
})
export class CreateRegistrationInfoComponent implements OnInit {
  @Output() close = new EventEmitter<string>();
  @Output() myListRegistrationInfo: EventEmitter<RegistrationInfo[]> = new EventEmitter()
  postOrganization = Constants.postOrganization;
  tempList:RegistrationInfo[]=[];
  public form: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      erjaCode:[''],
      nationalCode:[''],
      title:[''],
      erjaCodeZinaf:[''],
      nationalCodeAtba:[''],
      postType:[''],
      LimitsAuthority:[''],
      startDate:[''],
      endDate:[''],
    });
  }

  ngOnInit(): void {
  }

  Confirmation() {
    this.tempList.push(this.form.value);
    this.myListRegistrationInfo.emit(this.tempList)
    this.close.emit('close');
  }

  onClose() {
    this.close.emit('close');
  }
}

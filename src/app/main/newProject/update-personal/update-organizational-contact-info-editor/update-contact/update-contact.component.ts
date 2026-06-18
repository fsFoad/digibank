import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ContactInfo} from '../../../models/DigiBankModel';
import {Constants} from '../../../../shared/constants/Constants';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.scss']
})
export class UpdateContactComponent implements OnInit {
  @Output() close = new EventEmitter<string>();
  @Output() myListUpdateConstants: EventEmitter<ContactInfo[]> = new EventEmitter()
  contactTypeGroups =Constants.contactTypeGroups;
  TBListContact:ContactInfo[]=[]

  public form: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      contactTypeGroups:[''],
      contactInfo:[''],
      discContact:[''],
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
    this.TBListContact.push(this.form.value);
    this.myListUpdateConstants.emit(this.TBListContact)
    this.close.emit('close');
  }
}

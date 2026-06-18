import {Component, OnInit, Output} from '@angular/core';
import {Constants} from '../../../../shared/constants/Constants';
import {EventEmitter} from '@angular/core';
import {ContactInfo} from '../../../models/DigiBankModel';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.scss']
})
export class CreateContactComponent implements OnInit {
  @Output() close = new EventEmitter<string>();
  @Output() myListContact: EventEmitter<ContactInfo[]> = new EventEmitter()
  // @Output() TBList :ContactInfo[];
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
    this.myListContact.emit(this.TBListContact)
    this.close.emit('close');
  }
}

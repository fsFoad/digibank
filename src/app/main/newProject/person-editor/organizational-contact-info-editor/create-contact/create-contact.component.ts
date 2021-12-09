import {Component, OnInit, Output} from '@angular/core';
import {Constants} from '../../../../shared/constants/Constants';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.scss']
})
export class CreateContactComponent implements OnInit {
  @Output() close = new EventEmitter<string>();
  contactTypeGroups =Constants.contactTypeGroups;
  contactTypes =Constants.contactTypes;
  constructor() { }

  ngOnInit(): void {
  }
  onClose() {
    this.close.emit('close');
  }
}

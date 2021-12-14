import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Constants} from '../../../shared/constants/Constants';

@Component({
  selector: 'app-create-registration-info',
  templateUrl: './create-registration-info.component.html',
  styleUrls: ['./create-registration-info.component.scss']
})
export class CreateRegistrationInfoComponent implements OnInit {
  @Output() close = new EventEmitter<string>();
  postOrganization = Constants.postOrganization;

  constructor() {
  }

  ngOnInit(): void {
  }

  Confirmation() {
    this.close.emit('close');
  }

  onClose() {
    this.close.emit('close');
  }
}

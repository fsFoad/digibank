import {Component, OnInit} from '@angular/core';
import {ContactInfo, registrationInfo} from '../models/DigiBankModel';
import {Constants} from '../../shared/constants/Constants';

@Component({
  selector: 'app-board-of-directors-editor',
  templateUrl: './board-of-directors-editor.component.html',
  styleUrls: ['./board-of-directors-editor.component.scss']
})
export class BoardOfDirectorsEditorComponent implements OnInit {
  createRegistrationInfoFlag = false;
  TBListRegistrationInfo:registrationInfo[] = [];
  postOrganization = Constants.postOrganization;

  constructor() {
  }

  ngOnInit(): void {
  }

  removeRow(TBListRegistrationInfo: registrationInfo): void {
    this.TBListRegistrationInfo = this.TBListRegistrationInfo.filter(x => x !== TBListRegistrationInfo);
  }

  createRegistrationInfo() {
    this.createRegistrationInfoFlag = true;
  }

  onClose() {
    this.createRegistrationInfoFlag = false;
  }
  AddItemRegistrationInfo(newItemRegistrationInfo: registrationInfo[]){

      this.TBListRegistrationInfo.push(...newItemRegistrationInfo);
    }

}


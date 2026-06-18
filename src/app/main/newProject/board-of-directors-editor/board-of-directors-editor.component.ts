import {Component, OnInit} from '@angular/core';
import {ContactInfo, RegistrationInfo} from '../models/DigiBankModel';
import {Constants} from '../../shared/constants/Constants';

@Component({
  selector: 'app-board-of-directors-editor',
  templateUrl: './board-of-directors-editor.component.html',
  styleUrls: ['./board-of-directors-editor.component.scss']
})
export class BoardOfDirectorsEditorComponent implements OnInit {
  createRegistrationInfoFlag = false;
  TBListRegistrationInfo:RegistrationInfo[] = [];
  postOrganization = Constants.postOrganization;

  constructor() {
  }

  ngOnInit(): void {
  }

  removeRow(TBListRegistrationInfo: RegistrationInfo): void {
    this.TBListRegistrationInfo = this.TBListRegistrationInfo.filter(x => x !== TBListRegistrationInfo);
  }

  createRegistrationInfo() {
    this.createRegistrationInfoFlag = true;
  }

  onClose() {
    this.createRegistrationInfoFlag = false;
  }
  AddItemRegistrationInfo(newItemRegistrationInfo: RegistrationInfo[]){

      this.TBListRegistrationInfo.push(...newItemRegistrationInfo);
    }

}


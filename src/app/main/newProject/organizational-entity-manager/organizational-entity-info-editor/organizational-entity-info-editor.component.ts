import { Component, OnInit } from '@angular/core';
import {Constants} from '../../../shared/constants/Constants';

@Component({
  selector: 'app-organizational-entity-info-editor',
  templateUrl: './organizational-entity-info-editor.component.html',
  styleUrls: ['./organizational-entity-info-editor.component.scss']
})
export class OrganizationalEntityInfoEditorComponent implements OnInit {
  availableRoles=Constants.availableRoles;
  bankNameList=Constants.bankNameList;
  organizationalUnit = Constants.organizationalUnit;
  statusZinaf = Constants.statusZinaf;
  noMalekiat = Constants.noMalekiat;

  constructor() { }

  ngOnInit(): void {
  }

}

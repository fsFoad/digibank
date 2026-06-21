import { Component, OnInit } from '@angular/core';
import {Constants} from '../../../shared/constants/Constants';

@Component({
  selector: 'app-organizational-entity-documents-editor',
  templateUrl: './organizational-entity-documents-editor.component.html',
  styleUrls: ['./organizational-entity-documents-editor.component.scss']
})
export class OrganizationalEntityDocumentsEditorComponent implements OnInit {
  documentTypeOrganization=Constants.documentTypeOrganization;

  constructor() { }

  ngOnInit(): void {
  }

}

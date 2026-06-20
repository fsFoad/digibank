import {Component, OnInit} from '@angular/core';
import {Constants} from '../../../shared/constants/Constants';

@Component({
  selector: 'app-update-organizational-entity-documents-editor',
  templateUrl: './update-organizational-entity-documents-editor.component.html',
  styleUrls: ['./update-organizational-entity-documents-editor.component.scss']
})
export class UpdateOrganizationalEntityDocumentsEditorComponent implements OnInit {
  documentType = Constants.documentType;

  constructor() {
  }

  ngOnInit(): void {
  }

}

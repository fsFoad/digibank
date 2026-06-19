import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatasetService} from '../../shared/services/dataset.service';

@Component({
  selector: 'app-organizational-entity-list',
  templateUrl: './organizational-entity-list.component.html',
  styleUrls: ['./organizational-entity-list.component.scss']
})
export class OrganizationalEntityListComponent implements OnInit {

  detailsFlag = false;
  viewMode = false;
  person;

  fsList: any[] = [];
  selectedRow: Row;

  constructor(private router: Router, private datasetService: DatasetService) {
  }

  ngOnInit(): void {
    this.loadList();
  }

  loadList(): void {
    this.datasetService.load('organizational-entities').then(data => this.fsList = data.slice());
  }

  onClose(event: any) {
    if (event === 'close') {
      this.detailsFlag = false;
      this.viewMode = false;
      this.loadList();
    }
  }

  selectRow(servise, mode: 'edit' | 'view' = 'edit'): void {
    this.selectedRow = servise;
    this.viewMode = mode === 'view';
    this.detailsFlag = true;
  }
}

interface Row {
  fullName
  registrationDate
  contactNumber
  fieldOfActivity
  relationshipType
}

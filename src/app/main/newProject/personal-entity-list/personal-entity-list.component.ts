import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatasetService} from '../../shared/services/dataset.service';

@Component({
  selector: 'app-personal-entity-list',
  templateUrl: './personal-entity-list.component.html',
  styleUrls: ['./personal-entity-list.component.scss']
})
export class PersonalEntityListComponent implements OnInit {

  detailsFlag = false;
  viewMode = false;
  person;

  fsList: any[] = [];
  selectedRow: Row;

  constructor(private router: Router, private datasetService: DatasetService) {
  }

  ngOnInit(): void {
    debugger
    this.loadList();
  }

  loadList(): void {
    debugger
    this.datasetService.load('personal-entities').then(data =>{
      debugger
      this.fsList = data.slice()
      this.fsList=[...this.fsList]
      debugger
    } );
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

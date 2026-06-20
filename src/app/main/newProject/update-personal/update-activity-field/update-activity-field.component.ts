import {Component, OnInit} from '@angular/core';
import {Constants} from '../../../shared/constants/Constants';

@Component({
  selector: 'app-update-activity-field',
  templateUrl: './update-activity-field.component.html',
  styleUrls: ['./update-activity-field.component.scss']
})
export class UpdateActivityFieldComponent implements OnInit {

  availableField = Constants.activityFieldOptions;
  selectedField = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}

interface Role {
  name: string;
}

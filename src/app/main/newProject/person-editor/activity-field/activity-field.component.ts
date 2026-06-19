import {Component, OnInit} from '@angular/core';
import {Constants} from '../../../shared/constants/Constants';

@Component({
  selector: 'app-activity-field',
  templateUrl: './activity-field.component.html',
  styleUrls: ['./activity-field.component.scss']
})
export class ActivityFieldComponent implements OnInit {

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

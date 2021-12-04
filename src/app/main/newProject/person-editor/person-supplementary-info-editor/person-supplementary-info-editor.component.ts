import { Component, OnInit } from '@angular/core';
import { Constants } from '../../../shared/constants/Constants';

@Component({
  selector: 'app-person-supplementary-info-editor',
  templateUrl: './person-supplementary-info-editor.component.html',
  styleUrls: ['./person-supplementary-info-editor.component.scss']
})
export class PersonSupplementaryInfoEditorComponent implements OnInit {
  cityList = Constants.cityList.filter(x => x.value !== null);
  countryList = Constants.countryList.filter(x => x.value !== null);
  constructor() {
  }
  ngOnInit(): void {
  }

}

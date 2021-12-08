import {Component, Input, OnInit} from '@angular/core';
import {Constants} from '../../../shared/constants/Constants';

@Component({
  selector: 'app-update-person-supplementary-info-editor',
  templateUrl: './update-person-supplementary-info-editor.component.html',
  styleUrls: ['./update-person-supplementary-info-editor.component.scss']
})
export class UpdatePersonSupplementaryInfoEditorComponent implements OnInit {
  @Input() inputIdentity
  cityList = Constants.cityList.filter(x => x.value !== null);
  countryList = Constants.countryList.filter(x => x.value !== null);
  constructor() {
  }
  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {Constants} from '../../../shared/constants/Constants';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-person-supplementary-info-editor',
  templateUrl: './person-supplementary-info-editor.component.html',
  styleUrls: ['./person-supplementary-info-editor.component.scss']
})
export class PersonSupplementaryInfoEditorComponent implements OnInit {
  cityList=Constants.cityList;
  countryList=Constants.countryList;
  public form: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      city: [" "],
    });
  }
  ngOnInit(): void {
  }

}

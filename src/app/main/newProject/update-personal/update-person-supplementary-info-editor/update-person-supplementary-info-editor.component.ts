import {Component, Input, OnInit} from '@angular/core';
import {Constants} from '../../../shared/constants/Constants';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-update-person-supplementary-info-editor',
  templateUrl: './update-person-supplementary-info-editor.component.html',
  styleUrls: ['./update-person-supplementary-info-editor.component.scss']
})
export class UpdatePersonSupplementaryInfoEditorComponent implements OnInit {
  @Input() inputIdentity
  eduMaghta=Constants.eduMaghta;
  eduReshte=Constants.eduReshte;
  eduGraesh=Constants.eduGraesh;
  eduMoaseseType=Constants.eduMoaseseType;
  cityList = Constants.cityList.filter(x => x.value !== null);
  countryList = Constants.countryList.filter(x => x.value !== null);
  public form: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      nationalCode: [''],
      erjaCode: [''],
      title: [''],
      eduMaghta: [''],
      eduReshte: [''],
      eduGraesh: [''],
      eduMoaseseType: [''],
      eduCountry: [''],


    });
  }
  ngOnInit(): void {
    this.form.controls['nationalCode'].patchValue(this.inputIdentity.nationalCode)
    this.form.controls['erjaCode'].patchValue(this.inputIdentity.erjaCode)
    this.form.controls['eduMaghta'].patchValue(this.inputIdentity.eduMaghta)
    this.form.controls['eduReshte'].patchValue(this.inputIdentity.eduReshte)
    debugger
    this.form.controls['eduGraesh'].patchValue(this.inputIdentity.eduGraesh)
    this.form.controls['eduMoaseseType'].patchValue(this.inputIdentity.eduMoaseseType)
    this.form.controls['eduCountry'].patchValue(this.inputIdentity.country)
  }

}

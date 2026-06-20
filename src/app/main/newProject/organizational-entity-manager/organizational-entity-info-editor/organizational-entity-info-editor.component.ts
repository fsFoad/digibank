import {Component, Input, OnInit} from '@angular/core';
import {Constants} from '../../../shared/constants/Constants';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-organizational-entity-info-editor',
  templateUrl: './organizational-entity-info-editor.component.html',
  styleUrls: ['./organizational-entity-info-editor.component.scss']
})
export class OrganizationalEntityInfoEditorComponent implements OnInit {
  @Input() inputIdentity
  availableRoles=Constants.availableRoles;
  bankNameList=Constants.bankNameList;
  organizationalUnit = Constants.organizationalUnit;
  statusZinaf = Constants.statusZinaf;
  noMalekiat = Constants.noMalekiat;

  public form: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      nationalCode: [''],
      organizationalCode: [''],
      availableRoles: [''],
      bankNameList: [''],
      organizationalUnit: [''],
      statusZinaf: [''],
      shahabCode: [''],
      noMalekiat: [''],
      title: [''],
      enTitle: [''],
      numberSubmit: [''],
      numberNewspaperOfficial: [''],
      areaRegistration: [''],
      dateRegistration: [''],
      placeRegistration: [''],

    });
  }

  ngOnInit(): void {
    if (!this.inputIdentity) {
      return;
    }
    this.form.controls['nationalCode'].patchValue(this.inputIdentity.nationalCode)
    this.form.controls['availableRoles'].patchValue(this.inputIdentity.organizationalRole)
    this.form.controls['organizationalCode'].patchValue(this.inputIdentity.personalCode)
    this.form.controls['bankNameList'].patchValue(this.inputIdentity.bank)
    this.form.controls['organizationalUnit'].patchValue(this.inputIdentity.zinafType)
    this.form.controls['statusZinaf'].patchValue(this.inputIdentity.statusZinaf)
    this.form.controls['shahabCode'].patchValue(this.inputIdentity.shahabCode)
    this.form.controls['noMalekiat'].patchValue(this.inputIdentity.noMalekiat)
    this.form.controls['title'].patchValue(this.inputIdentity.customerName || this.inputIdentity.title)
    this.form.controls['enTitle'].patchValue(this.inputIdentity.enTitle)
    this.form.controls['numberSubmit'].patchValue(this.inputIdentity.numberSubmit)
    this.form.controls['numberNewspaperOfficial'].patchValue(this.inputIdentity.numberNewspaperOfficial)
    this.form.controls['areaRegistration'].patchValue(this.inputIdentity.areaRegistration)
    this.form.controls['placeRegistration'].patchValue(this.inputIdentity.placeRegistration)
    this.form.controls['dateRegistration'].patchValue(this.inputIdentity.dateRegistration)
  }

}

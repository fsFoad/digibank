import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, AsyncValidatorFn, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-person-identity-info-editor',
  templateUrl: './person-identity-info-editor.component.html',
  styleUrls: ['./person-identity-info-editor.component.scss']
})
export class PersonIdentityInfoEditorComponent implements OnInit {
  banks = [
    { name: '-' },
    { name: 'ملت' },
    { name: 'پارسیان' },
    { name: 'زیر عنوان' },
  ]
  public form: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      nationalCode: [''],
      organizationalRole: [''],
      personeliCode: [''],
      bankId: [''],
      firstName: [''],
      lastName: [''],
      fatherName: [''],
      shenasnameIssueDate: [''],
      shenasnameNumber: [''],
      shenasnameSeriesLetter: [''],
      shenasnameSeriesNumber: [''],
      shenasnameSerial: [''],
      cartMelliSerial: [''],
      shenasnameTypeId: [''],
      shenasnameIssueCityId: [''],
      shenasnameHozeCodeId: [''],
      genderId: [''],
      birthDate: [''],
      birthCityId: [''],
      birthCountryId: [''],
      religionId: [''],
      faithId: [''],
      eghamatStatusId: [''],
      birthDateGregorian: [''],
      firstNameLatin: [''],
      lastNameLatin: [''],
      lastNameLatin2: [''],
    });
  }

  ngOnInit(): void {
  }

  onNationalCodeEnterKey(): void {
    console.log('form', this.form.value);
    this.form.patchValue({
      firstName: 'احمد',
      lastName: 'احمدی رفیع',
      birthDate: 13400101,
      personeliCode: 100000010
    });
  }
}

interface FieldInfo {
  name: string;
  label: string;
  type?: string;
  formState?: any;
  validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null;
  asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null;
}

const fields: FieldInfo[] =
  [
    {
      label: 'کد ملی',
      name: 'nationalCode',
    },
    {
      label: 'نقش سازمانی',
      name: 'organizationalRole',
    },
    {
      label: 'کد پرسنلی',
      name: 'personeliCode',
    },
    {
      label: 'بانک',
      name: 'bankId',
      type: 'dropdown',
    },
    {
      label: 'نام',
      name: 'firstName',
    },
    {
      label: 'نام خانوادگی',
      name: 'lastName',
    },
    {
      label: 'نام پدر',
      name: 'fatherName',
    },
    {
      label: 'تاریخ صدور شناسنامه',
      name: 'shenasnameIssueDate',
    },
    {
      label: 'شماره شناسنامه',
      name: 'shenasnameNumber',
    },
    {
      label: 'حرف سری شناسنامه',
      name: 'shenasnameSeriesLetter',
    },
    {
      label: 'عدد سری شناسنامه',
      name: 'shenasnameSeriesNumber',
    },
    {
      label: 'سریال شناسنامه',
      name: 'shenasnameSerial',
    },
    {
      label: 'سریال کارت ملی',
      name: 'cartMelliSerial',
    },
    {
      label: 'نوع شناسنامه',
      name: 'shenasnameTypeId',
      type: 'dropdown',
    },
    {
      label: 'شهر محل صدور شناسنامه',
      name: 'shenasnameIssueCityId',
      type: 'dropdown',
    },
    {
      label: 'کد حوزه شناسنامه',
      name: 'shenasnameHozeCodeId',
      type: 'dropdown',
    },
    {
      label: 'جنسیت',
      name: 'genderId',
      type: 'dropdown',
    },
    {
      label: 'تاریخ تولد',
      name: 'birthDate',
      type: 'persianDate'
    },
    {
      label: 'شهر محل تولد',
      name: 'birthCityId',
      type: 'dropdown',
    },
    {
      label: 'کشور محل تولد',
      name: 'birthCountryId',
      type: 'dropdown',
    },
    {
      label: 'دین',
      name: 'religionId',
      type: 'dropdown',
    },
    {
      label: 'مذهب',
      name: 'faithId',
      type: 'dropdown',
    },
    {
      label: 'وضعیت اقامت',
      name: 'eghamatStatusId',
      type: 'dropdown',
    },
    {
      label: 'تاریخ تولد به میلادی',
      name: 'birthDateGregorian',
      type: 'date'
    },
    {
      label: 'نام انگلیسی',
      name: 'firstNameLatin',
    },
    {
      label: 'نام خانوادگی انگلیسی',
      name: 'lastNameLatin',
    },
    {
      label: 'نام خانوادگی انگلیسی',
      name: 'lastNameLatin2',
    }
  ]
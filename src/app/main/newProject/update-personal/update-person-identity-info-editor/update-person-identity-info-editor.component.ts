import {Component, Input, OnInit} from '@angular/core';
import {Constants} from '../../../shared/constants/Constants';
import {AbstractControlOptions, AsyncValidatorFn, FormBuilder, FormGroup, ValidatorFn} from '@angular/forms';

@Component({
  selector: 'app-update-person-identity-info-editor',
  templateUrl: './update-person-identity-info-editor.component.html',
  styleUrls: ['./update-person-identity-info-editor.component.scss']
})
export class UpdatePersonIdentityInfoEditorComponent implements OnInit {
  @Input() inputIdentity
  genderTypes = Constants.genderTypes;
  countryList = Constants.countryList;
  cityList = Constants.cityList;
  religion = Constants.religion;
  sect = Constants.sect;
  residenceTypes = Constants.residenceTypes;
  shenasnameType = Constants.shenasnameType;
  codeHoze = Constants.codeHoze;
  banks = [
    { value:'0',label: '-' },
    { value:'1',label: 'تجارت' },
    { value:'2',label: 'ملت' },
    { value:'3',label: 'پارسیان' },
    { value:'4',label: 'سینا' },
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
      shenasnameNumber: [null],
      shenasnameSeriesLetter: [''],
      shenasnameSeriesNumber: [null],
      shenasnameSerial: [null],
      cartMelliSerial: [null],
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
      enFatherName: [''],
    });
  }

  ngOnInit(): void {
    this.form.controls['nationalCode'].patchValue(this.inputIdentity.nationalCode)
    this.form.controls['organizationalRole'].patchValue(this.inputIdentity.organizationalRole)
    this.form.controls['personeliCode'].patchValue(this.inputIdentity.personalCode)
    this.form.controls['bankId'].patchValue(this.inputIdentity.banck)
    this.form.controls['firstName'].patchValue(this.inputIdentity.firstName)
    this.form.controls['lastName'].patchValue(this.inputIdentity.lastName)
    this.form.controls['fatherName'].patchValue(this.inputIdentity.fatherName)
    this.form.controls['shenasnameNumber'].patchValue(this.inputIdentity.numberShenasname)
    this.form.controls['shenasnameIssueDate'].patchValue(this.inputIdentity.dateShenasname)
    this.form.controls['shenasnameSeriesLetter'].patchValue(this.inputIdentity.seriShenasname)
    this.form.controls['shenasnameSeriesNumber'].patchValue(this.inputIdentity.addadShenasname)
    this.form.controls['shenasnameSerial'].patchValue(this.inputIdentity.seryalShenasname)
    this.form.controls['cartMelliSerial'].patchValue(this.inputIdentity.seryalkartMeli)
    this.form.controls['shenasnameTypeId'].patchValue(this.inputIdentity.shenasnameType)
    this.form.controls['shenasnameIssueCityId'].patchValue(this.inputIdentity.city)
    this.form.controls['shenasnameHozeCodeId'].patchValue(this.inputIdentity.codeHoze)
    this.form.controls['genderId'].patchValue(this.inputIdentity.genderType)
    this.form.controls['birthDate'].patchValue(this.inputIdentity.birthDate)
    this.form.controls['birthCityId'].patchValue(this.inputIdentity.city)
    this.form.controls['birthCountryId'].patchValue(this.inputIdentity.country)
    this.form.controls['religionId'].patchValue(this.inputIdentity.religion)
    this.form.controls['faithId'].patchValue(this.inputIdentity.sect)
    this.form.controls['eghamatStatusId'].patchValue(this.inputIdentity.residence)
    this.form.controls['birthDateGregorian'].patchValue(this.inputIdentity.enDate)
    this.form.controls['firstNameLatin'].patchValue(this.inputIdentity.enName)
    this.form.controls['lastNameLatin'].patchValue(this.inputIdentity.enLastName)
    this.form.controls['enFatherName'].patchValue(this.inputIdentity.enFatherName)
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

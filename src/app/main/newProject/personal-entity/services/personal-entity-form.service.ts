import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PersonalEntity, PersonalIdentityForm } from '../models/personal-entity.model';

/**
 * منطق فرمِ «اطلاعات هویتی».
 * ساخت فرم و نگاشتِ دوطرفه‌ی entity ↔ form را در یک جا متمرکز می‌کند
 * تا نام‌های متفاوتِ گرید/دیتاست و فرم (مثل personeliCode ↔ personalCode) فقط همین‌جا تعریف شوند.
 */
@Injectable({ providedIn: 'root' })
export class PersonalEntityFormService {
  constructor(private fb: FormBuilder) {}

  build(): FormGroup {
    return this.fb.group({
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
      contactNumber: [''],
      relationshipType: [''],
    });
  }

  /** نگاشت رکوردِ دیتاست → مقادیر فرم (برای حالت ویرایش). */
  toFormValue(e: PersonalEntity): PersonalIdentityForm {
    return {
      nationalCode: e.nationalCode,
      organizationalRole: e.organizationalRole,
      personeliCode: e.personalCode,
      bankId: e.banck,
      firstName: e.firstName,
      lastName: e.lastName,
      fatherName: e.fatherName,
      shenasnameIssueDate: e.dateShenasname,
      shenasnameNumber: e.numberShenasname,
      shenasnameSeriesLetter: e.seriShenasname,
      shenasnameSeriesNumber: e.addadShenasname,
      shenasnameSerial: e.seryalShenasname,
      cartMelliSerial: e.seryalkartMeli,
      shenasnameTypeId: e.shenasnameType,
      shenasnameIssueCityId: e.city,
      shenasnameHozeCodeId: e.codeHoze,
      genderId: e.genderType,
      birthDate: e.birthDate,
      birthCityId: e.city,
      birthCountryId: e.country,
      religionId: e.religion,
      faithId: e.sect,
      eghamatStatusId: e.residence,
      birthDateGregorian: e.enDate,
      firstNameLatin: e.enName,
      lastNameLatin: e.enLastName,
      enFatherName: e.enFatherName,
      contactNumber: e.contactNumber,
      relationshipType: e.relationshipType,
    };
  }

  /** نگاشت مقادیر فرم → رکوردِ دیتاست (برای ذخیره). */
  toEntity(f: PersonalIdentityForm): Partial<PersonalEntity> {
    return {
      customerType: 'حقیقی',
      firstName: f.firstName,
      lastName: f.lastName,
      customerName: ((f.firstName || '') + ' ' + (f.lastName || '')).trim(),
      fatherName: f.fatherName,
      nationalCode: f.nationalCode,
      organizationalRole: f.organizationalRole,
      personalCode: f.personeliCode,
      banck: f.bankId,
      numberShenasname: f.shenasnameNumber,
      dateShenasname: f.shenasnameIssueDate,
      seriShenasname: f.shenasnameSeriesLetter,
      addadShenasname: f.shenasnameSeriesNumber,
      seryalShenasname: f.shenasnameSerial,
      seryalkartMeli: f.cartMelliSerial,
      shenasnameType: f.shenasnameTypeId,
      city: f.shenasnameIssueCityId,
      codeHoze: f.shenasnameHozeCodeId,
      genderType: f.genderId,
      birthDate: f.birthDate,
      country: f.birthCountryId,
      religion: f.religionId,
      sect: f.faithId,
      residence: f.eghamatStatusId,
      enDate: f.birthDateGregorian,
      enName: f.firstNameLatin,
      enLastName: f.lastNameLatin,
      enFatherName: f.enFatherName,
      contactNumber: f.contactNumber,
      relationshipType: f.relationshipType,
    };
  }
}

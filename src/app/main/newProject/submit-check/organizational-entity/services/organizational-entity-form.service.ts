import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OrganizationalEntity, OrganizationalInfoForm } from '../models/organizational-entity.model';

/**
 * منطق فرمِ «اطلاعات سازمانی».
 * ساخت فرم و نگاشتِ دوطرفه‌ی entity ↔ form را در یک جا متمرکز می‌کند
 * تا نام‌های متفاوتِ گرید/دیتاست و فرم (مثل customerName ↔ title) فقط همین‌جا تعریف شوند.
 */
@Injectable({ providedIn: 'root' })
export class OrganizationalEntityFormService {
  constructor(private fb: FormBuilder) {}

  /** ساخت گروهِ فرمِ خالی برای تبِ اطلاعات سازمانی. */
  build(): FormGroup {
    return this.fb.group({
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

  /** نگاشت رکوردِ دیتاست → مقادیر فرم (برای حالت ویرایش). */
  toFormValue(e: OrganizationalEntity): OrganizationalInfoForm {
    return {
      nationalCode: e.nationalCode,
      organizationalCode: e.personalCode,
      availableRoles: e.organizationalRole,
      bankNameList: e.bank,
      organizationalUnit: e.zinafType,
      statusZinaf: e.statusZinaf,
      shahabCode: e.shahabCode,
      noMalekiat: e.noMalekiat,
      title: e.customerName || e.title,
      enTitle: e.enTitle,
      numberSubmit: e.numberSubmit,
      numberNewspaperOfficial: e.numberNewspaperOfficial,
      areaRegistration: e.areaRegistration,
      dateRegistration: e.dateRegistration,
      placeRegistration: e.placeRegistration,
    };
  }

  /** نگاشت مقادیر فرم → رکوردِ دیتاست (برای ذخیره). */
  toEntity(f: OrganizationalInfoForm): Partial<OrganizationalEntity> {
    return {
      customerType: 'حقوقی',
      customerName: f.title,
      title: f.title,
      enTitle: f.enTitle,
      nationalCode: f.nationalCode,
      organizationalRole: f.availableRoles,
      personalCode: f.organizationalCode,
      bank: f.bankNameList,
      zinafType: f.organizationalUnit,
      statusZinaf: f.statusZinaf,
      shahabCode: f.shahabCode,
      noMalekiat: f.noMalekiat,
      numberSubmit: f.numberSubmit,
      numberNewspaperOfficial: f.numberNewspaperOfficial,
      areaRegistration: f.areaRegistration,
      placeRegistration: f.placeRegistration,
      dateRegistration: f.dateRegistration,
    };
  }
}

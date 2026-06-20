import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Constants } from '../../../../shared/constants/Constants';

/**
 * کامپوننت presentationalِ فرمِ «اطلاعات هویتی».
 * فرم را خودش نمی‌سازد؛ گروهِ فرم را از والد می‌گیرد (Reactive Forms).
 */
@Component({
  selector: 'app-personal-identity-form',
  templateUrl: './personal-identity-form.component.html',
})
export class PersonalIdentityFormComponent {
  @Input() form!: FormGroup;

  readonly genderTypes = Constants.genderTypes;
  readonly countryList = Constants.countryList;
  readonly cityList = Constants.cityList;
  readonly religion = Constants.religion;
  readonly sect = Constants.sect;
  readonly residenceTypes = Constants.residenceTypes;
  readonly shenasnameType = Constants.shenasnameType;
  readonly codeHoze = Constants.codeHoze;
  readonly bankName = Constants.bankNameList;

  /** پرکردن آزمایشی فرم با مقادیر نمونه، مطابق رفتار نسخه‌ی مرجع. */
  onNationalCodeEnterKey(): void {
    this.form.patchValue({
      firstName: 'احمد',
      lastName: 'احمدی رفیع',
      birthDate: 13400101,
      personeliCode: 100000010,
    });
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Constants } from '../../../../../shared/constants/Constants';

/**
 * تبِ «اطلاعات تکمیلی» — تحصیلات، استخدام، و اطلاعات تکمیلی.
 * نسخه‌ی مرجع (update-person-supplementary-info-editor) برای «تعداد فرزندان» اشتباهاً
 * formControlName="tedadFamily" تکراری داشت؛ در این نسخه به tedadChild اصلاح شده است.
 */
@Component({
  selector: 'app-personal-supplementary-tab',
  templateUrl: './personal-supplementary-tab.component.html',
})
export class PersonalSupplementaryTabComponent {
  readonly eduMaghta = Constants.eduMaghta;
  readonly eduReshte = Constants.eduReshte;
  readonly eduGraesh = Constants.eduGraesh;
  readonly eduMoaseseType = Constants.eduMoaseseType;
  readonly recruitmentType = Constants.recruitmentType;
  readonly vahed = Constants.vahed;
  readonly post = Constants.post;
  readonly cityList = Constants.cityList.filter(x => x.value !== null);
  readonly countryList = Constants.countryList.filter(x => x.value !== null);

  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      eduMaghta: [''],
      eduReshte: [''],
      eduGraesh: [''],
      eduMoaseseType: [''],
      eduMoaseseName: [''],
      eduCountry: [''],
      startDate: [''],
      endDate: [''],
      eduCity: [''],
      recruitmentType: [''],
      vahed: [''],
      post: [''],
      sahmie: [''],
      tedadFamily: [''],
      tedadChild: [''],
      tedadKefalat: [''],
    });
  }

  getValue(): any {
    return this.form.value;
  }

  patchValue(data: any): void {
    if (data) {
      this.form.patchValue(data);
    }
  }
}

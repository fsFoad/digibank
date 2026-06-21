import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Constants } from '../../../../../shared/constants/Constants';

/** تبِ «امضاء» — فرمِ نوع امضا و بازه‌ی تاریخ به‌همراه ناحیه‌ی تصویر. */
@Component({
  selector: 'app-personal-signature-tab',
  templateUrl: './personal-signature-tab.component.html',
})
export class PersonalSignatureTabComponent {
  readonly signType = Constants.signType;
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      signType: [''],
      startDate: [''],
      endDate: [''],
      description: [''],
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

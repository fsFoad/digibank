import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Constants } from '../../../../../shared/constants/Constants';

/** تبِ «امضاء» — فرمِ ساده‌ی نوع امضا و بازه‌ی تاریخ به‌همراه ناحیه‌ی تصویر. */
@Component({
  selector: 'app-org-signature-tab',
  templateUrl: './org-signature-tab.component.html',
})
export class OrgSignatureTabComponent {
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

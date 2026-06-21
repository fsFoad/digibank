import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Constants } from '../../../../../shared/constants/Constants';

/** تبِ «مستندات» — فرمِ نوع سند و متادیتاها به‌همراه ناحیه‌ی تصویر سند. */
@Component({
  selector: 'app-personal-documents-tab',
  templateUrl: './personal-documents-tab.component.html',
})
export class PersonalDocumentsTabComponent {
  readonly documentType = Constants.documentType;
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      documentType: [''],
      metadata1: [''],
      metadata2: [''],
      readFromFile: [''],
      footer: [''],
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

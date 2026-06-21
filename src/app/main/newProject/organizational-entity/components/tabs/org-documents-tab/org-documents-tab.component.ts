import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Constants } from '../../../../../shared/constants/Constants';

/** تبِ «مستندات» — فرمِ نوع سند و متادیتاها به‌همراه ناحیه‌ی تصویر سند. */
@Component({
  selector: 'app-org-documents-tab',
  templateUrl: './org-documents-tab.component.html',
})
export class OrgDocumentsTabComponent {
  readonly documentTypeOrganization = Constants.documentTypeOrganization;
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      documentTypeOrganization: [''],
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

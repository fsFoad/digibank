import { Component } from '@angular/core';
import { Constants } from '../../../../../shared/constants/Constants';

interface ActivityField {
  label?: string;
  value?: any;
}

/** تبِ «زمینه فعالیت» — انتخاب زمینه‌های فعالیت با pickList. */
@Component({
  selector: 'app-personal-activity-field-tab',
  templateUrl: './personal-activity-field-tab.component.html',
})
export class PersonalActivityFieldTabComponent {
  source: ActivityField[] = [...Constants.activityFieldOptions];
  target: ActivityField[] = [];

  getValue(): any {
    return { activityFields: this.target };
  }

  patchValue(data: any): void {
    if (data && Array.isArray(data.activityFields)) {
      const selectedValues = data.activityFields.map((r: ActivityField) => r.value);
      this.target = Constants.activityFieldOptions.filter(r => selectedValues.includes(r.value));
      this.source = Constants.activityFieldOptions.filter(r => !selectedValues.includes(r.value));
    }
  }
}

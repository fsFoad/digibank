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
}

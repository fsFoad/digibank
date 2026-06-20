import { Component } from '@angular/core';
import { Constants } from '../../../../../shared/constants/Constants';

interface Role {
  label?: string;
  value?: any;
}

/** تبِ «نقش سازمانی» — انتخاب نقش‌ها با pickList. */
@Component({
  selector: 'app-personal-role-tab',
  templateUrl: './personal-role-tab.component.html',
})
export class PersonalRoleTabComponent {
  source: Role[] = [...Constants.availableRolespickList];
  target: Role[] = [];
}

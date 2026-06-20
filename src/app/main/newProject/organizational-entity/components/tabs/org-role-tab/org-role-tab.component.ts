import { Component } from '@angular/core';
import { Constants } from '../../../../../shared/constants/Constants';

interface Role {
  label?: string;
  value?: any;
}

/** تبِ «نقش سازمانی» — انتخاب نقش‌ها با pickList. */
@Component({
  selector: 'app-org-role-tab',
  templateUrl: './org-role-tab.component.html',
})
export class OrgRoleTabComponent {
  // کپی از Constants تا منبع اصلی mutate نشود
  source: Role[] = [...Constants.availableRolespickList];
  target: Role[] = [];
}

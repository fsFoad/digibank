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

  getValue(): any {
    return { organizationalRoles: this.target };
  }

  patchValue(data: any): void {
    if (data && Array.isArray(data.organizationalRoles)) {
      const selectedValues = data.organizationalRoles.map((r: Role) => r.value);
      this.target = Constants.availableRolespickList.filter(r => selectedValues.includes(r.value));
      this.source = Constants.availableRolespickList.filter(r => !selectedValues.includes(r.value));
    }
  }
}

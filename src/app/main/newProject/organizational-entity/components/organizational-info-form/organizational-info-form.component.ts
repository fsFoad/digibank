import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Constants } from '../../../../shared/constants/Constants';

/**
 * کامپوننت presentationalِ فرمِ «اطلاعات سازمانی».
 * فرم را خودش نمی‌سازد؛ گروهِ فرم را از والد می‌گیرد (Reactive Forms).
 * گزینه‌های دراپ‌داون از Constants (که از lookups.json می‌آید) خوانده می‌شوند.
 */
@Component({
  selector: 'app-organizational-info-form',
  templateUrl: './organizational-info-form.component.html',
})
export class OrganizationalInfoFormComponent {
  @Input() form!: FormGroup;

  readonly availableRoles = Constants.availableRoles;
  readonly bankNameList = Constants.bankNameList;
  readonly organizationalUnit = Constants.organizationalUnit;
  readonly statusZinaf = Constants.statusZinaf;
  readonly noMalekiat = Constants.noMalekiat;
}

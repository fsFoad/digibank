import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { OrganizationalEntityService } from '../../services/organizational-entity.service';
import { OrganizationalEntityFormService } from '../../services/organizational-entity-form.service';
import { EntityFormMode, OrganizationalEntity } from '../../models/organizational-entity.model';
import { DateUtil } from '../../../../shared/util/DateUtil';

/**
 * کانتینرِ هوشمندِ ذینفع سازمانی — یک کامپوننت برای هر دو حالتِ «افزودن» و «ویرایش».
 * - حالت از طریق @Input یا data روتِ مسیر تعیین می‌شود.
 * - منطق فرم به FormService و دسترسی داده به EntityService واگذار شده است.
 * - تبِ «اطلاعات سازمانی» presentational است؛ بقیه‌ی تب‌ها همان کامپوننت‌های موجودند.
 */
@Component({
  selector: 'app-organizational-entity-form',
  templateUrl: './organizational-entity-form.component.html',
  styleUrls: ['./organizational-entity-form.component.scss'],
})
export class OrganizationalEntityFormComponent implements OnInit {
  /** 'create' برای افزودن، 'edit' برای ویرایش. */
  @Input() mode: EntityFormMode = 'create';
  /** رکوردی که در حالت ویرایش باید فرم با آن پر شود. */
  @Input() entity: OrganizationalEntity | null = null;
  /** بعد از ذخیره/خروج، برای استفاده‌ی inline (مثلاً داخل لیست) منتشر می‌شود. */
  @Output() done = new EventEmitter<boolean>();

  private static readonly LAST_TAB = 5;

  form!: FormGroup;
  activeTab = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private entityService: OrganizationalEntityService,
    private formService: OrganizationalEntityFormService,
  ) {}

  ngOnInit(): void {
    // اگر mode از والد ست نشده، از data مسیر بخوان
    const routeMode = this.route.snapshot.data && this.route.snapshot.data.mode;
    if (routeMode) {
      this.mode = routeMode;
    }
    this.form = this.formService.build();
    if (this.mode === 'edit' && this.entity) {
      this.form.patchValue(this.formService.toFormValue(this.entity));
    }
  }

  get isEdit(): boolean {
    return this.mode === 'edit';
  }
  get title(): string {
    return this.isEdit ? 'ویرایش ذینفع سازمانی' : 'افزودن ذینفع سازمانی';
  }
  get isLastTab(): boolean {
    return this.activeTab >= OrganizationalEntityFormComponent.LAST_TAB;
  }

  nextTab(): void {
    this.activeTab = Math.min(OrganizationalEntityFormComponent.LAST_TAB, this.activeTab + 1);
  }
  prevTab(): void {
    this.activeTab = Math.max(0, this.activeTab - 1);
  }

  save(): void {
    const payload = this.formService.toEntity(this.form.value);
    if (this.isEdit && this.entity && this.entity.id != null) {
      this.entityService.update(this.entity.id, payload).then(() => this.finish());
    } else {
      // تاریخ تعریف رکورد به‌صورت خودکار همان لحظه‌ی ثبت است؛ از کاربر گرفته نمی‌شود
      payload.registrationDate = Number(DateUtil.persianDateNow());
      this.entityService.create(payload as OrganizationalEntity).then(() => this.finish());
    }
  }

  exit(): void {
    this.finish();
  }

  private finish(): void {
    // اگر inline استفاده شده، به والد خبر بده؛ در غیر این صورت به خانه برگرد
    if (this.done.observers.length > 0) {
      this.done.emit(true);
    } else {
      this.router.navigate(['/']);
    }
  }
}

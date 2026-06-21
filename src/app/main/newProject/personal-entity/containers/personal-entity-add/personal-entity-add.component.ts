import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { PersonalEntityService } from '../../services/personal-entity.service';
import { PersonalEntityFormService } from '../../services/personal-entity-form.service';
import { EntityFormMode, PersonalEntity } from '../../models/personal-entity.model';
import { DateUtil } from '../../../../shared/util/DateUtil';

/**
 * کانتینرِ هوشمندِ ذینفع شخصی — یک کامپوننت برای هر دو حالتِ «افزودن» و «ویرایش».
 * - حالت از طریق @Input یا data روتِ مسیر تعیین می‌شود.
 * - منطق فرم به FormService و دسترسی داده به EntityService واگذار شده است.
 */
@Component({
  selector: 'app-personal-entity-add',
  templateUrl: './personal-entity-add.component.html',
  styleUrls: ['./personal-entity-add.component.scss'],
})
export class PersonalEntityAddComponent implements OnInit {
  /** 'create' برای افزودن، 'edit' برای ویرایش. */
  @Input() mode: EntityFormMode = 'create';
  /** رکوردی که در حالت ویرایش باید فرم با آن پر شود. */
  @Input() entity: PersonalEntity | null = null;
  /** بعد از ذخیره/خروج، برای استفاده‌ی inline (مثلاً داخل لیست) منتشر می‌شود. */
  @Output() done = new EventEmitter<boolean>();

  private static readonly LAST_TAB = 6;

  form!: FormGroup;
  activeTab = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private entityService: PersonalEntityService,
    private formService: PersonalEntityFormService,
  ) {}

  ngOnInit(): void {
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
    return this.isEdit ? 'ویرایش ذینفع شخصی' : 'افزودن ذینفع شخصی';
  }
  get isLastTab(): boolean {
    return this.activeTab >= PersonalEntityAddComponent.LAST_TAB;
  }

  nextTab(): void {
    this.activeTab = Math.min(PersonalEntityAddComponent.LAST_TAB, this.activeTab + 1);
  }
  prevTab(): void {
    this.activeTab = Math.max(0, this.activeTab - 1);
  }

  save(): void {
    const payload = this.formService.toEntity(this.form.value);
    if (this.isEdit && this.entity && this.entity.id != null) {
      this.entityService.update(this.entity.id, payload).then(() => this.goToList());
    } else {
      // تاریخ تعریف رکورد به‌صورت خودکار همان لحظه‌ی ثبت است؛ از کاربر گرفته نمی‌شود
      payload.registrationDate = Number(DateUtil.persianDateNow());
      this.entityService.create(payload as PersonalEntity).then(() => this.goToList());
    }
  }

  /** برگشت به لیستِ ذینفعان شخصی (هم پس از ثبت، هم با دکمه‌ی برگشتِ هدر). */
  goToList(): void {
    if (this.done.observers.length > 0) {
      this.done.emit(true);
    } else {
      this.router.navigate(['/personal-entity-edit']);
    }
  }
}

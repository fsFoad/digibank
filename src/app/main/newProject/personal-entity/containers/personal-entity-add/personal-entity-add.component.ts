import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { PersonalEntityService } from '../../services/personal-entity.service';
import { PersonalEntityFormService } from '../../services/personal-entity-form.service';
import { EntityFormMode, PersonalEntity } from '../../models/personal-entity.model';
import { DateUtil } from '../../../../shared/util/DateUtil';
import { PersonalSignatureTabComponent } from '../../components/tabs/personal-signature-tab/personal-signature-tab.component';
import { PersonalRoleTabComponent } from '../../components/tabs/personal-role-tab/personal-role-tab.component';
import { PersonalContactTabComponent } from '../../components/tabs/personal-contact-tab/personal-contact-tab.component';
import { PersonalSupplementaryTabComponent } from '../../components/tabs/personal-supplementary-tab/personal-supplementary-tab.component';
import { PersonalActivityFieldTabComponent } from '../../components/tabs/personal-activity-field-tab/personal-activity-field-tab.component';
import { PersonalDocumentsTabComponent } from '../../components/tabs/personal-documents-tab/personal-documents-tab.component';

/**
 * کانتینرِ هوشمندِ ذینفع شخصی — یک کامپوننت برای هر سه حالتِ «افزودن»، «ویرایش»، و «نمایش».
 * - حالت از طریق @Input یا data روتِ مسیر تعیین می‌شود.
 * - منطق فرمِ تبِ اول به FormService و دسترسی داده به EntityService واگذار شده است.
 * - بقیه‌ی تب‌ها (امضاء، نقش، تماس، تکمیلی، زمینه فعالیت، مستندات) state خودشان را دارند
 *   و از طریق متدهای getValue()/patchValue() با والد سینک می‌شوند تا تغییراتشان هم در دیتاست ذخیره شود.
 */
@Component({
  selector: 'app-personal-entity-add',
  templateUrl: './personal-entity-add.component.html',
  styleUrls: ['./personal-entity-add.component.scss'],
})
export class PersonalEntityAddComponent implements OnInit, AfterViewInit {
  /** 'create' برای افزودن، 'edit' برای ویرایش، 'view' برای نمایش. */
  @Input() mode: EntityFormMode = 'create';
  /** رکوردی که در حالت ویرایش/نمایش باید فرم با آن پر شود. */
  @Input() entity: PersonalEntity | null = null;
  /** بعد از ذخیره، برای استفاده‌ی inline (مثلاً داخل لیست) منتشر می‌شود. */
  @Output() done = new EventEmitter<boolean>();

  @ViewChild('signatureTab') signatureTab!: PersonalSignatureTabComponent;
  @ViewChild('roleTab') roleTab!: PersonalRoleTabComponent;
  @ViewChild('contactTab') contactTab!: PersonalContactTabComponent;
  @ViewChild('supplementaryTab') supplementaryTab!: PersonalSupplementaryTabComponent;
  @ViewChild('activityFieldTab') activityFieldTab!: PersonalActivityFieldTabComponent;
  @ViewChild('documentsTab') documentsTab!: PersonalDocumentsTabComponent;

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
    if ((this.mode === 'edit' || this.mode === 'view') && this.entity) {
      this.form.patchValue(this.formService.toFormValue(this.entity));
    }
  }

  ngAfterViewInit(): void {
    // تب‌های دیگر بعد از رندرِ کاملِ ViewChildها پاتچ می‌شوند (در حالت ویرایش/نمایش)
    if ((this.mode === 'edit' || this.mode === 'view') && this.entity) {
      setTimeout(() => this.patchOtherTabs(), 0);
    }
  }

  private patchOtherTabs(): void {
    const e = this.entity as any;
    if (!e) {
      return;
    }
    this.signatureTab?.patchValue(e);
    this.roleTab?.patchValue(e);
    this.contactTab?.patchValue(e);
    this.supplementaryTab?.patchValue(e);
    this.activityFieldTab?.patchValue(e);
    this.documentsTab?.patchValue(e);
  }

  get isEdit(): boolean {
    return this.mode === 'edit';
  }
  get isView(): boolean {
    return this.mode === 'view';
  }
  get title(): string {
    if (this.isView) {
      return 'نمایش ذینفع شخصی';
    }
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

  /** جمعِ مقادیرِ همه‌ی تب‌ها در یک رکورد یکپارچه برای ذخیره. */
  private collectPayload(): PersonalEntity {
    const payload = this.formService.toEntity(this.form.value) as PersonalEntity;
    Object.assign(
      payload,
      this.signatureTab?.getValue(),
      this.roleTab?.getValue(),
      this.contactTab?.getValue(),
      this.supplementaryTab?.getValue(),
      this.activityFieldTab?.getValue(),
      this.documentsTab?.getValue(),
    );
    return payload;
  }

  save(): void {
    const payload = this.collectPayload();
    if (this.isEdit && this.entity && this.entity.id != null) {
      this.entityService.update(this.entity.id, payload).then(() => this.goToList());
    } else {
      // تاریخ تعریف رکورد به‌صورت خودکار همان لحظه‌ی ثبت است؛ از کاربر گرفته نمی‌شود
      payload.registrationDate = Number(DateUtil.persianDateNow());
      this.entityService.create(payload).then(() => this.goToList());
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

import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { OrganizationalEntityService } from '../../services/organizational-entity.service';
import { OrganizationalEntityFormService } from '../../services/organizational-entity-form.service';
import { EntityFormMode, OrganizationalEntity } from '../../models/organizational-entity.model';
import { DateUtil } from '../../../../shared/util/DateUtil';
import { OrgBoardTabComponent } from '../../components/tabs/org-board-tab/org-board-tab.component';
import { OrgSignatureTabComponent } from '../../components/tabs/org-signature-tab/org-signature-tab.component';
import { OrgRoleTabComponent } from '../../components/tabs/org-role-tab/org-role-tab.component';
import { OrgContactTabComponent } from '../../components/tabs/org-contact-tab/org-contact-tab.component';
import { OrgDocumentsTabComponent } from '../../components/tabs/org-documents-tab/org-documents-tab.component';

/**
 * کانتینرِ هوشمندِ ذینفع سازمانی — یک کامپوننت برای هر سه حالتِ «افزودن»، «ویرایش»، و «نمایش».
 * - حالت از طریق @Input یا data روتِ مسیر تعیین می‌شود.
 * - منطق فرمِ تبِ اول به FormService و دسترسی داده به EntityService واگذار شده است.
 * - بقیه‌ی تب‌ها (هیئت‌مدیره، امضاء، نقش، تماس، مستندات) state خودشان را دارند و از طریق
 *   متدهای getValue()/patchValue() با والد سینک می‌شوند تا تغییراتشان هم در دیتاست ذخیره شود.
 */
@Component({
  selector: 'app-organizational-entity-add',
  templateUrl: './organizational-entity-add.component.html',
  styleUrls: ['./organizational-entity-add.component.scss'],
})
export class OrganizationalEntityAddComponent implements OnInit, AfterViewInit {
  /** 'create' برای افزودن، 'edit' برای ویرایش، 'view' برای نمایش. */
  @Input() mode: EntityFormMode = 'create';
  /** رکوردی که در حالت ویرایش/نمایش باید فرم با آن پر شود. */
  @Input() entity: OrganizationalEntity | null = null;
  /** بعد از ذخیره، برای استفاده‌ی inline (مثلاً داخل لیست) منتشر می‌شود. */
  @Output() done = new EventEmitter<boolean>();

  @ViewChild('boardTab') boardTab!: OrgBoardTabComponent;
  @ViewChild('signatureTab') signatureTab!: OrgSignatureTabComponent;
  @ViewChild('roleTab') roleTab!: OrgRoleTabComponent;
  @ViewChild('contactTab') contactTab!: OrgContactTabComponent;
  @ViewChild('documentsTab') documentsTab!: OrgDocumentsTabComponent;

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
    this.boardTab?.patchValue(e);
    this.signatureTab?.patchValue(e);
    this.roleTab?.patchValue(e);
    this.contactTab?.patchValue(e);
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
      return 'نمایش ذینفع سازمانی';
    }
    return this.isEdit ? 'ویرایش ذینفع سازمانی' : 'افزودن ذینفع سازمانی';
  }
  get isLastTab(): boolean {
    return this.activeTab >= OrganizationalEntityAddComponent.LAST_TAB;
  }

  nextTab(): void {
    this.activeTab = Math.min(OrganizationalEntityAddComponent.LAST_TAB, this.activeTab + 1);
  }
  prevTab(): void {
    this.activeTab = Math.max(0, this.activeTab - 1);
  }

  /** جمعِ مقادیرِ همه‌ی تب‌ها در یک رکورد یکپارچه برای ذخیره. */
  private collectPayload(): OrganizationalEntity {
    const payload = this.formService.toEntity(this.form.value) as OrganizationalEntity;
    Object.assign(
      payload,
      this.boardTab?.getValue(),
      this.signatureTab?.getValue(),
      this.roleTab?.getValue(),
      this.contactTab?.getValue(),
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

  /** برگشت به لیستِ ذینفعان سازمانی (هم پس از ثبت، هم با دکمه‌ی برگشتِ هدر). */
  goToList(): void {
    if (this.done.observers.length > 0) {
      this.done.emit(true);
    } else {
      this.router.navigate(['/organizational-entity-edit']);
    }
  }
}

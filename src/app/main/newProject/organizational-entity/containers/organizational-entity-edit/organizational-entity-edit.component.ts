import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { OrganizationalEntityService } from '../../services/organizational-entity.service';
import { EntityFormMode, OrganizationalEntity } from '../../models/organizational-entity.model';

/**
 * لیستِ ذینفعان سازمانی برای ورودِ «ویرایش».
 * انتخاب یک ردیف، کانتینرِ فرم را در حالت ویرایش به‌صورت inline نمایش می‌دهد.
 * دکمه‌ی «نمایش» همان فرم را در حالت فقط‌خواندنی باز می‌کند؛ «حذف» با تأیید، رکورد را از دیتاست حذف می‌کند.
 */
@Component({
  selector: 'app-organizational-entity-edit',
  templateUrl: './organizational-entity-edit.component.html',
  styleUrls: ['./organizational-entity-edit.component.scss'],
})
export class OrganizationalEntityEditComponent implements OnInit {
  readonly editMode: EntityFormMode = 'edit';
  readonly viewMode: EntityFormMode = 'view';
  entities: OrganizationalEntity[] = [];
  selected: OrganizationalEntity | null = null;
  mode: EntityFormMode = 'edit';
  editing = false;

  constructor(
    private entityService: OrganizationalEntityService,
    private confirmationService: ConfirmationService,
  ) {}

  ngOnInit(): void {
    this.loadList();
  }

  private loadList(): void {
    this.entityService.getAll().then(list => (this.entities = list.slice()));
  }

  edit(entity: OrganizationalEntity): void {
    this.selected = entity;
    this.mode = 'edit';
    this.editing = true;
  }

  view(entity: OrganizationalEntity): void {
    this.selected = entity;
    this.mode = 'view';
    this.editing = true;
  }

  remove(entity: OrganizationalEntity): void {
    if (entity.id == null) {
      return;
    }
    this.confirmationService.confirm({
      message: `آیا از حذف «${entity.customerName}» مطمئن هستید؟`,
      header: 'تأیید حذف',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'حذف',
      rejectLabel: 'انصراف',
      accept: () => {
        this.entityService.remove(entity.id).then(() => this.loadList());
      },
    });
  }

  onDone(): void {
    this.editing = false;
    this.selected = null;
    this.loadList();
  }
}

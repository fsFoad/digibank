import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { PersonalEntityService } from '../../services/personal-entity.service';
import { EntityFormMode, PersonalEntity } from '../../models/personal-entity.model';

/**
 * لیستِ ذینفعان شخصی برای ورودِ «ویرایش».
 * انتخاب یک ردیف، کانتینرِ فرم را در حالت ویرایش به‌صورت inline نمایش می‌دهد.
 * دکمه‌ی «نمایش» همان فرم را در حالت فقط‌خواندنی باز می‌کند؛ «حذف» با تأیید، رکورد را از دیتاست حذف می‌کند.
 */
@Component({
  selector: 'app-personal-entity-edit',
  templateUrl: './personal-entity-edit.component.html',
  styleUrls: ['./personal-entity-edit.component.scss'],
})
export class PersonalEntityEditComponent implements OnInit {
  readonly editMode: EntityFormMode = 'edit';
  readonly viewMode: EntityFormMode = 'view';
  entities: PersonalEntity[] = [];
  selected: PersonalEntity | null = null;
  mode: EntityFormMode = 'edit';
  editing = false;

  constructor(
    private entityService: PersonalEntityService,
    private confirmationService: ConfirmationService,
  ) {}

  ngOnInit(): void {
    this.loadList();
  }

  private loadList(): void {
    this.entityService.getAll().then(list => (this.entities = list.slice()));
  }

  add(): void {
    this.selected = null;
    this.mode = 'create';
    this.editing = true;
  }

  edit(entity: PersonalEntity): void {
    this.selected = entity;
    this.mode = 'edit';
    this.editing = true;
  }

  view(entity: PersonalEntity): void {
    this.selected = entity;
    this.mode = 'view';
    this.editing = true;
  }

  remove(entity: PersonalEntity): void {
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

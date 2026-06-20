import { Component, OnInit } from '@angular/core';
import { OrganizationalEntityService } from '../../services/organizational-entity.service';
import { EntityFormMode, OrganizationalEntity } from '../../models/organizational-entity.model';

/**
 * لیستِ ذینفعان سازمانی برای ورودِ «ویرایش».
 * انتخاب یک ردیف، کانتینرِ فرم را در حالت ویرایش به‌صورت inline نمایش می‌دهد.
 */
@Component({
  selector: 'app-organizational-entity-manage',
  templateUrl: './organizational-entity-manage.component.html',
  styleUrls: ['./organizational-entity-manage.component.scss'],
})
export class OrganizationalEntityManageComponent implements OnInit {
  readonly editMode: EntityFormMode = 'edit';
  entities: OrganizationalEntity[] = [];
  selected: OrganizationalEntity | null = null;
  editing = false;

  constructor(private entityService: OrganizationalEntityService) {}

  ngOnInit(): void {
    this.loadList();
  }

  private loadList(): void {
    this.entityService.getAll().then(list => (this.entities = list.slice()));
  }

  edit(entity: OrganizationalEntity): void {
    this.selected = entity;
    this.editing = true;
  }

  onDone(): void {
    this.editing = false;
    this.selected = null;
    this.loadList();
  }
}

import { Component, OnInit } from '@angular/core';
import { PersonalEntityService } from '../../services/personal-entity.service';
import { EntityFormMode, PersonalEntity } from '../../models/personal-entity.model';

/**
 * لیستِ ذینفعان شخصی برای ورودِ «ویرایش».
 * انتخاب یک ردیف، کانتینرِ فرم را در حالت ویرایش به‌صورت inline نمایش می‌دهد.
 */
@Component({
  selector: 'app-personal-entity-edit',
  templateUrl: './personal-entity-edit.component.html',
  styleUrls: ['./personal-entity-edit.component.scss'],
})
export class PersonalEntityEditComponent implements OnInit {
  readonly editMode: EntityFormMode = 'edit';
  entities: PersonalEntity[] = [];
  selected: PersonalEntity | null = null;
  editing = false;

  constructor(private entityService: PersonalEntityService) {}

  ngOnInit(): void {
    this.loadList();
  }

  private loadList(): void {
    this.entityService.getAll().then(list => (this.entities = list.slice()));
  }

  edit(entity: PersonalEntity): void {
    this.selected = entity;
    this.editing = true;
  }

  onDone(): void {
    this.editing = false;
    this.selected = null;
    this.loadList();
  }
}

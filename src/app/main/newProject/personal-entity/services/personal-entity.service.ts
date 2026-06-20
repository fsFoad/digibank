import { Injectable } from '@angular/core';
import { DatasetService } from '../../../shared/services/dataset.service';
import { PersonalEntity, PERSONAL_ENTITY_DATASET } from '../models/personal-entity.model';

/**
 * لایه‌ی دسترسی به داده‌ی «ذینفع شخصی».
 * تنها نقطه‌ی تماس فیچر با DatasetService؛ کامپوننت‌ها مستقیم با دیتاست کار نمی‌کنند.
 */
@Injectable({ providedIn: 'root' })
export class PersonalEntityService {
  private readonly dataset = PERSONAL_ENTITY_DATASET;

  constructor(private datasetService: DatasetService) {}

  getAll(): Promise<PersonalEntity[]> {
    return this.datasetService.load(this.dataset);
  }

  getById(id: number | string): Promise<PersonalEntity | null> {
    return this.getAll().then(list => list.find(e => String(e.id) === String(id)) || null);
  }

  create(entity: PersonalEntity): Promise<PersonalEntity> {
    return this.getAll().then(() => this.datasetService.add(this.dataset, entity));
  }

  update(id: number | string, changes: Partial<PersonalEntity>): Promise<void> {
    return this.getAll().then(() => this.datasetService.update(this.dataset, id, changes));
  }
}

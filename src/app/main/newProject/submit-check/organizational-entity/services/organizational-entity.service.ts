import { Injectable } from '@angular/core';
import { DatasetService } from '../../../shared/services/dataset.service';
import { OrganizationalEntity, ORGANIZATIONAL_ENTITY_DATASET } from '../models/organizational-entity.model';

/**
 * لایه‌ی دسترسی به داده‌ی «ذینفع سازمانی».
 * تنها نقطه‌ی تماس فیچر با DatasetService؛ کامپوننت‌ها مستقیم با دیتاست کار نمی‌کنند.
 */
@Injectable({ providedIn: 'root' })
export class OrganizationalEntityService {
  private readonly dataset = ORGANIZATIONAL_ENTITY_DATASET;

  constructor(private datasetService: DatasetService) {}

  /** همه‌ی ذینفعان سازمانی. */
  getAll(): Promise<OrganizationalEntity[]> {
    return this.datasetService.load(this.dataset);
  }

  /** یک ذینفع بر اساس شناسه. */
  getById(id: number | string): Promise<OrganizationalEntity | null> {
    return this.getAll().then(list => list.find(e => String(e.id) === String(id)) || null);
  }

  /** افزودن ذینفع جدید (شناسه به‌صورت خودکار تولید می‌شود). */
  create(entity: OrganizationalEntity): Promise<OrganizationalEntity> {
    // ابتدا load تا رکوردهای موجود از بین نروند، سپس add
    return this.getAll().then(() => this.datasetService.add(this.dataset, entity));
  }

  /** ویرایش ذینفع موجود. */
  update(id: number | string, changes: Partial<OrganizationalEntity>): Promise<void> {
    return this.getAll().then(() => this.datasetService.update(this.dataset, id, changes));
  }
}

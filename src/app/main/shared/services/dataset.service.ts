import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * DatasetService
 * دیتاست‌ها را از فایل‌های JSON داخل assets/data می‌خواند، در حافظه نگه می‌دارد و
 * تغییرات (ثبت/ویرایش/حذف) را در localStorage ذخیره می‌کند تا بین رفرش‌ها هم بماند.
 *
 * نام دیتاست = نام فایل JSON بدون پسوند. مثلا:
 *   load('personal-entities')  ->  assets/data/personal-entities.json
 *
 * هر رکورد یک فیلد id دارد که در زمان add خودکار ساخته می‌شود.
 */
@Injectable({ providedIn: 'root' })
export class DatasetService {
  private cache: { [name: string]: any[] } = {};
  private readonly storagePrefix = 'ds_';

  constructor(private http: HttpClient) {}

  /** دیتاست را برمی‌گرداند: اول از localStorage، اگر نبود از فایل JSON. */
  load(name: string): Promise<any[]> {
    return this.http.get<any[]>(`assets/data/${name}.json`).toPromise()
      .then(data => Array.isArray(data) ? data : []);
  }

  /** نسخه‌ی درون‌حافظه‌ای (بعد از load). */
  getAll(name: string): any[] {
    return this.cache[name] || [];
  }

  /** افزودن رکورد جدید؛ id خودکار ساخته می‌شود و رکورد ذخیره می‌گردد. */
  add(name: string, record: any): any {
    const list = this.cache[name] || (this.cache[name] = []);
    const item = { ...record, id: record && record.id ? record.id : this.nextId(list) };
    list.push(item);
    this.persist(name);
    return item;
  }

  /** ویرایش رکورد موجود بر اساس id. */
  update(name: string, id: any, changes: any): void {
    const list = this.cache[name] || [];
    const idx = list.findIndex(r => String(r.id) === String(id));
    if (idx > -1) {
      list[idx] = { ...list[idx], ...changes, id: list[idx].id };
      this.persist(name);
    }
  }

  /** حذف رکورد بر اساس id. */
  remove(name: string, id: any): void {
    this.cache[name] = (this.cache[name] || []).filter(r => String(r.id) !== String(id));
    this.persist(name);
  }

  /** بازگرداندن دیتاست به حالت اولیه‌ی فایل JSON (پاک‌کردن تغییرات localStorage). */
  reset(name: string): Promise<any[]> {
    localStorage.removeItem(this.storagePrefix + name);
    delete this.cache[name];
    return this.load(name);
  }

  private persist(name: string): void {
    localStorage.setItem(this.storagePrefix + name, JSON.stringify(this.cache[name] || []));
  }

  private nextId(list: any[]): number {
    return list.reduce((max, r) => Math.max(max, Number(r.id) || 0), 0) + 1;
  }
}

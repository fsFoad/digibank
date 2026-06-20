import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * DatasetService
 * دیتاست‌ها را از فایل‌های JSON داخل assets/data می‌خواند.
 *
 * استراتژی کش (مهم):
 *  - دیتاست‌های «مرجع» (ماک‌هایی که فقط خوانده می‌شوند) هرگز در localStorage کش نمی‌شوند؛
 *    همیشه تازه از فایل JSON خوانده می‌شوند. پس اگر دیتای ماک را تغییر دهی، بلافاصله می‌آید.
 *  - فقط دیتاست‌هایی که کاربر روی‌شان add/update/remove زده «dirty» علامت می‌خورند و در
 *    localStorage ذخیره می‌شوند تا بین رفرش‌ها بمانند (مثل ذینفع‌ها).
 *
 * نام دیتاست = نام فایل JSON بدون پسوند.
 */
@Injectable({ providedIn: 'root' })
export class DatasetService {
  private cache: { [name: string]: any } = {};
  private readonly storagePrefix = 'ds_';
  private readonly dirtyKey = 'ds_dirty';

  constructor(private http: HttpClient) {}

  // -------- لیست dirtyها --------
  private dirtySet(): Set<string> {
    try {
      return new Set<string>(JSON.parse(localStorage.getItem(this.dirtyKey) || '[]'));
    } catch {
      return new Set<string>();
    }
  }
  private isDirty(name: string): boolean {
    return this.dirtySet().has(name);
  }
  private markDirty(name: string): void {
    const s = this.dirtySet();
    s.add(name);
    localStorage.setItem(this.dirtyKey, JSON.stringify(Array.from(s)));
  }

  /**
   * محتوای خام دیتاست (آرایه یا آبجکت).
   * dirty -> از localStorage ، در غیر این صورت همیشه تازه از فایل JSON.
   */
  loadRaw(name: string, fallback?: any): Promise<any> {
    if (Object.prototype.hasOwnProperty.call(this.cache, name)) {
      return Promise.resolve(this.cache[name]);
    }
    // فقط دیتاست‌های تغییرکرده‌ی کاربر از localStorage خوانده می‌شوند
    if (this.isDirty(name)) {
      const stored = localStorage.getItem(this.storagePrefix + name);
      if (stored) {
        this.cache[name] = JSON.parse(stored);
        return Promise.resolve(this.cache[name]);
      }
    }
    return this.http.get<any>(`assets/data/${name}.json`).toPromise()
      .then(data => {
        this.cache[name] = data;            // فقط کش حافظه‌ای (نه localStorage)
        return data;
      })
      .catch(() => {
        this.cache[name] = (fallback !== undefined ? fallback : null);
        return this.cache[name];
      });
  }

  /** دیتاست به‌صورت آرایه (برای لیست‌های CRUD). */
  load(name: string): Promise<any[]> {
    return this.loadRaw(name).then(data => (Array.isArray(data) ? data : []));
  }

  /** نسخه‌ی درون‌حافظه‌ای (بعد از load). */
  getAll(name: string): any[] {
    return Array.isArray(this.cache[name]) ? this.cache[name] : [];
  }

  /** افزودن رکورد جدید (دیتاست dirty و persist می‌شود). */
  add(name: string, record: any): any {
    const list = Array.isArray(this.cache[name]) ? this.cache[name] : (this.cache[name] = []);
    const item = { ...record, id: record && record.id ? record.id : this.nextId(list) };
    list.push(item);
    this.persist(name);
    return item;
  }

  /** ویرایش رکورد بر اساس id (دیتاست dirty و persist می‌شود). */
  update(name: string, id: any, changes: any): void {
    const list = Array.isArray(this.cache[name]) ? this.cache[name] : [];
    const idx = list.findIndex(r => String(r.id) === String(id));
    if (idx > -1) {
      list[idx] = { ...list[idx], ...changes, id: list[idx].id };
      this.persist(name);
    }
  }

  /** حذف رکورد بر اساس id (دیتاست dirty و persist می‌شود). */
  remove(name: string, id: any): void {
    this.cache[name] = (Array.isArray(this.cache[name]) ? this.cache[name] : []).filter(r => String(r.id) !== String(id));
    this.persist(name);
  }

  /** بازگرداندن دیتاست به حالت اولیه‌ی فایل JSON (پاک‌کردن تغییرات کاربر). */
  reset(name: string): Promise<any[]> {
    localStorage.removeItem(this.storagePrefix + name);
    const s = this.dirtySet();
    s.delete(name);
    localStorage.setItem(this.dirtyKey, JSON.stringify(Array.from(s)));
    delete this.cache[name];
    return this.load(name);
  }

  private persist(name: string): void {
    localStorage.setItem(this.storagePrefix + name, JSON.stringify(this.cache[name] || []));
    this.markDirty(name);
  }

  private nextId(list: any[]): number {
    return list.reduce((max, r) => Math.max(max, Number(r.id) || 0), 0) + 1;
  }
}

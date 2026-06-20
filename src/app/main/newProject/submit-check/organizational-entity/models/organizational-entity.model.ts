/**
 * مدل دامنه‌ی «ذینفع سازمانی».
 * شکل رکوردی که در دیتاست (organizational-entities.json) ذخیره می‌شود.
 */
export interface OrganizationalEntity {
  id?: number;
  customerType: string;          // همیشه 'حقوقی'
  customerName: string;          // عنوان (در گرید نمایش داده می‌شود)
  title: string;
  enTitle: string;
  nationalCode: string;          // شناسه ملی
  organizationalRole: string;    // نقش سازمانی
  personalCode: number | string | null; // کد سازمانی
  bank: string;
  zinafType: string;             // نوع ذینفع سازمانی
  statusZinaf: string;           // وضعیت ذینفع
  shahabCode: string;
  noMalekiat: string;            // نوع مالکیت
  numberSubmit: string;          // شماره ثبت
  numberNewspaperOfficial: string; // شماره روزنامه رسمی
  areaRegistration: string;      // حوزه ثبت
  placeRegistration: string;     // محل ثبت
  dateRegistration: string;      // تاریخ ثبت
  registrationDate?: number;
  contactNumber?: string;
  relationshipType?: string;
  [key: string]: any;            // سایر فیلدهای جانبی (تب‌های دیگر)
}

/** مدل فرمِ تبِ «اطلاعات سازمانی» (نام کنترل‌ها با فیلدهای دیتاست فرق دارد). */
export interface OrganizationalInfoForm {
  nationalCode: string;
  organizationalCode: string | number | null;
  availableRoles: string;
  bankNameList: string;
  organizationalUnit: string;
  statusZinaf: string;
  shahabCode: string;
  noMalekiat: string;
  title: string;
  enTitle: string;
  numberSubmit: string;
  numberNewspaperOfficial: string;
  areaRegistration: string;
  dateRegistration: string;
  placeRegistration: string;
}

/** حالت کانتینر: افزودن یا ویرایش. */
export type EntityFormMode = 'create' | 'edit';

/** نام دیتاست مرتبط با این فیچر. */
export const ORGANIZATIONAL_ENTITY_DATASET = 'organizational-entities';

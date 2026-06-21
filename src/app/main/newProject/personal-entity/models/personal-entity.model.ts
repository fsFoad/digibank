/**
 * مدل دامنه‌ی «ذینفع شخصی».
 * شکل رکوردی که در دیتاست (personal-entities.json) ذخیره می‌شود.
 */
export interface PersonalEntity {
  id?: number;
  customerType: string;   // همیشه 'حقیقی'
  customerName: string;   // نام + نام‌خانوادگی (در گرید نمایش داده می‌شود)
  firstName: string;
  lastName: string;
  fatherName: string;
  nationalCode: string;
  organizationalRole: string;
  personalCode: number | string | null;
  banck: string;          // نام فیلد در دیتاست عمداً همین املا است

  numberShenasname: number | null;
  dateShenasname: string;
  seriShenasname: string;
  addadShenasname: number | null;
  seryalShenasname: number | null;
  seryalkartMeli: number | null;
  shenasnameType: string;
  city: string;
  codeHoze: string;
  genderType: string;
  birthDate: number | string;
  country: string;
  religion: string;
  sect: string;
  residence: string;
  enDate: string;
  enName: string;
  enLastName: string;
  enFatherName: string;

  registrationDate?: number;
  contactNumber?: string;
  relationshipType?: string;

  [key: string]: any; // سایر فیلدهای جانبی (تب‌های دیگر)
}

/** مدل فرمِ تبِ «اطلاعات هویتی» (نام کنترل‌ها با فیلدهای دیتاست فرق دارد). */
export interface PersonalIdentityForm {
  nationalCode: string;
  organizationalRole: string;
  personeliCode: string | number | null;
  bankId: string;
  firstName: string;
  lastName: string;
  fatherName: string;
  shenasnameIssueDate: string;
  shenasnameNumber: number | null;
  shenasnameSeriesLetter: string;
  shenasnameSeriesNumber: number | null;
  shenasnameSerial: number | null;
  cartMelliSerial: number | null;
  shenasnameTypeId: string;
  shenasnameIssueCityId: string;
  shenasnameHozeCodeId: string;
  genderId: string;
  birthDate: string | number;
  birthCityId: string;
  birthCountryId: string;
  religionId: string;
  faithId: string;
  eghamatStatusId: string;
  birthDateGregorian: string;
  firstNameLatin: string;
  lastNameLatin: string;
  enFatherName: string;
  contactNumber: string;
  relationshipType: string;
}

/** حالت کانتینر: افزودن، ویرایش، یا فقط نمایش (read-only). */
export type EntityFormMode = 'create' | 'edit' | 'view';

/** نام دیتاست مرتبط با این فیچر. */
export const PERSONAL_ENTITY_DATASET = 'personal-entities';

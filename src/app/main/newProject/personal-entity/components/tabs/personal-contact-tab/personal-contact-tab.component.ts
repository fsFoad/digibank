import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Constants } from '../../../../../shared/constants/Constants';
import { PersonalEntity } from '../../../models/personal-entity.model';

export interface ContactRow {
  contactTypeGroups: string;
  contactTypes: string;
  discContact: string;
}
export interface AddressRow {
  contactTypes: string;
  province: string;
  city: string;
  mantaghe: string;
  postalCode: string;
  desAddress: string;
}

type Panel = 'list' | 'contact' | 'address';

/**
 * تبِ «اطلاعات تماس».
 * منبعِ اصلیِ دیتا، آرایه‌های contacts/addresses هستند که با getValue/patchValue
 * توسط کانتینر مدیریت می‌شوند (مانند بقیه‌ی تب‌ها). در صورتی‌که برای رکوردی هنوز
 * هیچ contacts/addresses ذخیره نشده باشد (رکوردهای قدیمی‌تر)، به‌عنوان fallback
 * یک ردیف از فیلدهای پراکنده‌ی قدیمیِ entity ساخته می‌شود.
 */
@Component({
  selector: 'app-personal-contact-tab',
  templateUrl: './personal-contact-tab.component.html',
})
export class PersonalContactTabComponent {
  @Input() entity: PersonalEntity | null = null;

  readonly contactTypeGroups = Constants.contactTypeGroups;
  readonly contactTypes = Constants.contactTypes;
  readonly provinceList = Constants.provinceList;
  readonly cityList = Constants.cityList;
  readonly mantaghe = Constants.mantaghe;

  contacts: ContactRow[] = [];
  addresses: AddressRow[] = [];
  panel: Panel = 'list';

  contactForm: FormGroup;
  addressForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.buildContactForm();
    this.addressForm = this.buildAddressForm();
  }

  private buildContactForm(): FormGroup {
    return this.fb.group({ contactTypeGroups: [''], contactTypes: [''], discContact: [''] });
  }
  private buildAddressForm(): FormGroup {
    return this.fb.group({
      contactTypes: [''], province: [''], city: [''],
      mantaghe: [''], postalCode: [''], desAddress: [''],
    });
  }

  openContact(): void { this.contactForm = this.buildContactForm(); this.panel = 'contact'; }
  openAddress(): void { this.addressForm = this.buildAddressForm(); this.panel = 'address'; }
  back(): void { this.panel = 'list'; }

  confirmContact(): void {
    this.contacts = [...this.contacts, this.contactForm.value];
    this.panel = 'list';
  }
  confirmAddress(): void {
    this.addresses = [...this.addresses, this.addressForm.value];
    this.panel = 'list';
  }

  getValue(): any {
    return { contacts: this.contacts, addresses: this.addresses };
  }

  /**
   * پاتچ از روی رکورد. اگر contacts/addresses قبلاً ذخیره شده باشند، همان استفاده می‌شود؛
   * در غیر این صورت (رکورد قدیمی بدون این فیلدها)، یک ردیف از فیلدهای پراکنده‌ی قدیمی ساخته می‌شود.
   */
  patchValue(data: PersonalEntity): void {
    if (!data) {
      return;
    }
    if (Array.isArray(data.contacts) && data.contacts.length) {
      this.contacts = data.contacts;
    } else if (data.contactTypeGroups || data.phoneNumber) {
      this.contacts = [
        {
          contactTypeGroups: data.contactTypeGroups,
          contactTypes: data.contactTypes,
          discContact: data.phoneNumber,
        } as ContactRow,
      ];
    }

    if (Array.isArray(data.addresses) && data.addresses.length) {
      this.addresses = data.addresses;
    } else if (data.contactProvince || data.contactCity || data.postalCode) {
      this.addresses = [
        {
          contactTypes: data.contactTypes,
          province: data.contactProvince,
          city: data.contactCity,
          mantaghe: data.mantaghe,
          postalCode: data.postalCode,
          desAddress: data.addressDescription,
        } as AddressRow,
      ];
    }
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Constants } from '../../../../../shared/constants/Constants';

export interface ContactRow {
  contactTypeGroups: string;
  contactInfo: string;
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
 * دو جدول (تماس‌ها و نشانی‌ها) با فرم‌های افزودنِ inline که با یک state واحد سوییچ می‌شوند.
 * فیلدهای phoneNumber/nahveTasarofs و تاریخ شروع/پایان در نسخه‌ی اصلی غیرفعال (کامنت) بودند
 * و در این نسخه نیز عمداً فعال نشده‌اند تا رفتار با مرجع یکسان بماند.
 */
@Component({
  selector: 'app-org-contact-tab',
  templateUrl: './org-contact-tab.component.html',
})
export class OrgContactTabComponent {
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
    return this.fb.group({ contactTypeGroups: [''], contactInfo: [''], discContact: [''] });
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

  patchValue(data: any): void {
    if (data) {
      if (Array.isArray(data.contacts)) {
        this.contacts = data.contacts;
      }
      if (Array.isArray(data.addresses)) {
        this.addresses = data.addresses;
      }
    }
  }
}

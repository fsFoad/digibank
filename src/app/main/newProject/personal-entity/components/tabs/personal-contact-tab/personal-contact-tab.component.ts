import { Component, Input, OnChanges } from '@angular/core';
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
 * در حالت ویرایش، ردیفِ نمایشی از روی entity ساخته می‌شود (مطابق رفتار نسخه‌ی مرجع)؛
 * افزودنِ مورد جدید با فرمِ inline انجام می‌شود.
 */
@Component({
  selector: 'app-personal-contact-tab',
  templateUrl: './personal-contact-tab.component.html',
})
export class PersonalContactTabComponent implements OnChanges {
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

  ngOnChanges(): void {
    if (!this.entity) {
      return;
    }
    // پیش‌نمایشِ ردیفِ موجود از روی فیلدهای entity، مطابق رفتار نسخه‌ی مرجع
    this.contacts = [
      {
        contactTypeGroups: this.entity.contactTypeGroups,
        contactTypes: this.entity.contactTypes,
        discContact: this.entity.phoneNumber,
      },
    ];
    this.addresses = [
      {
        contactTypes: this.entity.contactTypes,
        province: this.entity.contactProvince,
        city: this.entity.contactCity,
        mantaghe: this.entity.mantaghe,
        postalCode: this.entity.postalCode,
        desAddress: this.entity.addressDescription,
      },
    ];
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
}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankpayaChargeComponent } from './bankpaya-charge.component';

describe('BankpayaChargeComponent', () => {
  let component: BankpayaChargeComponent;
  let fixture: ComponentFixture<BankpayaChargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankpayaChargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankpayaChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

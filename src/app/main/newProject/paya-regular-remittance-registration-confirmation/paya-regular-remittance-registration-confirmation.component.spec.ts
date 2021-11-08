import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayaRegularRemittanceRegistrationConfirmationComponent } from './paya-regular-remittance-registration-confirmation.component';

describe('PayaRegularRemittanceRegistrationConfirmationComponent', () => {
  let component: PayaRegularRemittanceRegistrationConfirmationComponent;
  let fixture: ComponentFixture<PayaRegularRemittanceRegistrationConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayaRegularRemittanceRegistrationConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayaRegularRemittanceRegistrationConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

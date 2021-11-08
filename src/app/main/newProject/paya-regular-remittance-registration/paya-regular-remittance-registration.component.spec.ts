import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayaRegularRemittanceRegistrationComponent } from './paya-regular-remittance-registration.component';

describe('PayaRegularRemittanceRegistrationComponent', () => {
  let component: PayaRegularRemittanceRegistrationComponent;
  let fixture: ComponentFixture<PayaRegularRemittanceRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayaRegularRemittanceRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayaRegularRemittanceRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

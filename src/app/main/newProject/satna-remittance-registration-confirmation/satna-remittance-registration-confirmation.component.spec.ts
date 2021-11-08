import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SatnaRemittanceRegistrationConfirmationComponent } from './satna-remittance-registration-confirmation.component';

describe('SatnaRemittanceRegistrationConfirmationComponent', () => {
  let component: SatnaRemittanceRegistrationConfirmationComponent;
  let fixture: ComponentFixture<SatnaRemittanceRegistrationConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatnaRemittanceRegistrationConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatnaRemittanceRegistrationConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SatnaRemittanceRegistrationComponent } from './satna-remittance-registration.component';

describe('SatnaRemittanceRegistrationComponent', () => {
  let component: SatnaRemittanceRegistrationComponent;
  let fixture: ComponentFixture<SatnaRemittanceRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatnaRemittanceRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatnaRemittanceRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

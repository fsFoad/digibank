import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayaGroupRemittanceCartableDetailsComponent } from './paya-group-remittance-cartable-details.component';

describe('PayaGroupRemittanceCartableDetailsComponent', () => {
  let component: PayaGroupRemittanceCartableDetailsComponent;
  let fixture: ComponentFixture<PayaGroupRemittanceCartableDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayaGroupRemittanceCartableDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayaGroupRemittanceCartableDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayaGroupRemittanceCartableComponent } from './paya-group-remittance-cartable.component';

describe('PayaGroupRemittanceCartableComponent', () => {
  let component: PayaGroupRemittanceCartableComponent;
  let fixture: ComponentFixture<PayaGroupRemittanceCartableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayaGroupRemittanceCartableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayaGroupRemittanceCartableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

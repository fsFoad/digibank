import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialPaymentCartableDetailsComponent } from './special-payment-cartable-details.component';

describe('SpecialPaymentCartableDetailsComponent', () => {
  let component: SpecialPaymentCartableDetailsComponent;
  let fixture: ComponentFixture<SpecialPaymentCartableDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialPaymentCartableDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialPaymentCartableDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

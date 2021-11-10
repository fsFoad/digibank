import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialPaymentCartableComponent } from './special-payment-cartable.component';

describe('SpecialPaymentCartableComponent', () => {
  let component: SpecialPaymentCartableComponent;
  let fixture: ComponentFixture<SpecialPaymentCartableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialPaymentCartableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialPaymentCartableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

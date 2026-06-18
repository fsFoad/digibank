import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayaRegularRemittanceCartableComponent } from './paya-regular-remittance-cartable.component';

describe('PayaRegularRemittanceCartableComponent', () => {
  let component: PayaRegularRemittanceCartableComponent;
  let fixture: ComponentFixture<PayaRegularRemittanceCartableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayaRegularRemittanceCartableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayaRegularRemittanceCartableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

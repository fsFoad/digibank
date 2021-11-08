import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayaRegularRemittanceCartableDetailsComponent } from './paya-regular-remittance-cartable-details.component';

describe('PayaRegularRemittanceCartableDetailsComponent', () => {
  let component: PayaRegularRemittanceCartableDetailsComponent;
  let fixture: ComponentFixture<PayaRegularRemittanceCartableDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayaRegularRemittanceCartableDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayaRegularRemittanceCartableDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

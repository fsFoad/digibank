import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportFeePaymentManagmentComponent } from './report-fee-payment-managment.component';

describe('ReportFeePaymentManagmentComponent', () => {
  let component: ReportFeePaymentManagmentComponent;
  let fixture: ComponentFixture<ReportFeePaymentManagmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportFeePaymentManagmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportFeePaymentManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

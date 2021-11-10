import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEditInformationPaymentManagementComponent } from './view-edit-information-payment-management.component';

describe('ViewEditInformationPaymentManagementComponent', () => {
  let component: ViewEditInformationPaymentManagementComponent;
  let fixture: ComponentFixture<ViewEditInformationPaymentManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEditInformationPaymentManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEditInformationPaymentManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

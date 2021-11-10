import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPaymentManagementFileComponent } from './upload-payment-management-file.component';

describe('UploadPaymentManagementFileComponent', () => {
  let component: UploadPaymentManagementFileComponent;
  let fixture: ComponentFixture<UploadPaymentManagementFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadPaymentManagementFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadPaymentManagementFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

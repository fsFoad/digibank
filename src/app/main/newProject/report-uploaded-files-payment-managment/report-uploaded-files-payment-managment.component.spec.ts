import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportUploadedFilesPaymentManagmentComponent } from './report-uploaded-files-payment-managment.component';

describe('ReportUploadedFilesPaymentManagmentComponent', () => {
  let component: ReportUploadedFilesPaymentManagmentComponent;
  let fixture: ComponentFixture<ReportUploadedFilesPaymentManagmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportUploadedFilesPaymentManagmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportUploadedFilesPaymentManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

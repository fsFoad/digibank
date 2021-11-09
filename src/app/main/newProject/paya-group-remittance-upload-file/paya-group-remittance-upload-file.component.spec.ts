import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayaGroupRemittanceUploadFileComponent } from './paya-group-remittance-upload-file.component';

describe('PayaGroupRemittanceUploadFileComponent', () => {
  let component: PayaGroupRemittanceUploadFileComponent;
  let fixture: ComponentFixture<PayaGroupRemittanceUploadFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayaGroupRemittanceUploadFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayaGroupRemittanceUploadFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

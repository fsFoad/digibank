import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditViewOtpProcessComponent } from './edit-view-otp-process.component';

describe('EditViewOtpProcessComponent', () => {
  let component: EditViewOtpProcessComponent;
  let fixture: ComponentFixture<EditViewOtpProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditViewOtpProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditViewOtpProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

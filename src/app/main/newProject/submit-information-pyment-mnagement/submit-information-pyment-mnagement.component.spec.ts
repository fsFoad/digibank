import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitInformationPymentMnagementComponent } from './submit-information-pyment-mnagement.component';

describe('SubmitInformationPymentMnagementComponent', () => {
  let component: SubmitInformationPymentMnagementComponent;
  let fixture: ComponentFixture<SubmitInformationPymentMnagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitInformationPymentMnagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitInformationPymentMnagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

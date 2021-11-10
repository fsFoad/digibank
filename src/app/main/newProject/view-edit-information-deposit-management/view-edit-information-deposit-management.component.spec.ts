import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEditInformationDepositManagementComponent } from './view-edit-information-deposit-management.component';

describe('ViewEditInformationDepositManagementComponent', () => {
  let component: ViewEditInformationDepositManagementComponent;
  let fixture: ComponentFixture<ViewEditInformationDepositManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEditInformationDepositManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEditInformationDepositManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

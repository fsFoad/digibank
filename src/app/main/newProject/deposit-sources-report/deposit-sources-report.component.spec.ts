import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositSourcesReportComponent } from './deposit-sources-report.component';

describe('DepositSourcesReportComponent', () => {
  let component: DepositSourcesReportComponent;
  let fixture: ComponentFixture<DepositSourcesReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositSourcesReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositSourcesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

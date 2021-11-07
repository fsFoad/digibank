import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternetRemittanceReportComponent } from './internet-remittance-report.component';

describe('InternetRemittanceReportComponent', () => {
  let component: InternetRemittanceReportComponent;
  let fixture: ComponentFixture<InternetRemittanceReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternetRemittanceReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternetRemittanceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

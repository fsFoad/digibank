import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReliableRemittanceReportComponent } from './reliable-remittance-report.component';

describe('ReliableRemittanceReportComponent', () => {
  let component: ReliableRemittanceReportComponent;
  let fixture: ComponentFixture<ReliableRemittanceReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReliableRemittanceReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReliableRemittanceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

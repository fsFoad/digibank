import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportGroupRemittanceComponent } from './report-group-remittance.component';

describe('ReportGroupRemittanceComponent', () => {
  let component: ReportGroupRemittanceComponent;
  let fixture: ComponentFixture<ReportGroupRemittanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportGroupRemittanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportGroupRemittanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

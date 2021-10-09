import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPayaBankComponent } from './report-paya-bank.component';

describe('ReportPayaBankComponent', () => {
  let component: ReportPayaBankComponent;
  let fixture: ComponentFixture<ReportPayaBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportPayaBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportPayaBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

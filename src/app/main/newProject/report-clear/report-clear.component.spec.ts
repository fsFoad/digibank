import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportClearComponent } from './report-clear.component';

describe('ReportClearComponent', () => {
  let component: ReportClearComponent;
  let fixture: ComponentFixture<ReportClearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportClearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportClearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportCheckBardashtComponent } from './report-check-bardasht.component';

describe('ReportCheckBardashtComponent', () => {
  let component: ReportCheckBardashtComponent;
  let fixture: ComponentFixture<ReportCheckBardashtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportCheckBardashtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportCheckBardashtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

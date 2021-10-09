import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportGhabzComponent } from './report-ghabz.component';

describe('ReportGhabzComponent', () => {
  let component: ReportGhabzComponent;
  let fixture: ComponentFixture<ReportGhabzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportGhabzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportGhabzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

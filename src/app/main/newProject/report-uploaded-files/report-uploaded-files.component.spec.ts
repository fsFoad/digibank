import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportUploadedFilesComponent } from './report-uploaded-files.component';

describe('ReportUploadedFilesComponent', () => {
  let component: ReportUploadedFilesComponent;
  let fixture: ComponentFixture<ReportUploadedFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportUploadedFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportUploadedFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

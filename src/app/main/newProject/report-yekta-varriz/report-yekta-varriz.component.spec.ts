import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportYektaVarrizComponent } from './report-yekta-varriz.component';

describe('ReportYektaVarrizComponent', () => {
  let component: ReportYektaVarrizComponent;
  let fixture: ComponentFixture<ReportYektaVarrizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportYektaVarrizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportYektaVarrizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndirectLiabilitiesReportsComponent } from './indirect-liabilities-reports.component';

describe('IndirectLiabilitiesReportsComponent', () => {
  let component: IndirectLiabilitiesReportsComponent;
  let fixture: ComponentFixture<IndirectLiabilitiesReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndirectLiabilitiesReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndirectLiabilitiesReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

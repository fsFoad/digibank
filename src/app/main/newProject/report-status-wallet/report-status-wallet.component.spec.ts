import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportStatusWalletComponent } from './report-status-wallet.component';

describe('ReportStatusWalletComponent', () => {
  let component: ReportStatusWalletComponent;
  let fixture: ComponentFixture<ReportStatusWalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportStatusWalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportStatusWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

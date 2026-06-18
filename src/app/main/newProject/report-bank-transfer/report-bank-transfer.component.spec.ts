import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportBankTransferComponent } from './report-bank-transfer.component';

describe('ReportBankTransferComponent', () => {
  let component: ReportBankTransferComponent;
  let fixture: ComponentFixture<ReportBankTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportBankTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportBankTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

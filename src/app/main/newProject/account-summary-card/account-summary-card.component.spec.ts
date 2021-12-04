import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSummaryCardComponent } from './account-summary-card.component';

describe('AccountSummaryCardComponent', () => {
  let component: AccountSummaryCardComponent;
  let fixture: ComponentFixture<AccountSummaryCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSummaryCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSummaryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

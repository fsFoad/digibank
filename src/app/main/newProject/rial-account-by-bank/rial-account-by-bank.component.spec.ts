import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RialAccountByBankComponent } from './rial-account-by-bank.component';

describe('RialAccountByBankComponent', () => {
  let component: RialAccountByBankComponent;
  let fixture: ComponentFixture<RialAccountByBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RialAccountByBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RialAccountByBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

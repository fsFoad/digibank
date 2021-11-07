import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourCurrencyAccountsComponent } from './your-currency-accounts.component';

describe('YourCurrencyAccountsComponent', () => {
  let component: YourCurrencyAccountsComponent;
  let fixture: ComponentFixture<YourCurrencyAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourCurrencyAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourCurrencyAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

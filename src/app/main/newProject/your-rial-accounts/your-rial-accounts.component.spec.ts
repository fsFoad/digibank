import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourRialAccountsComponent } from './your-rial-accounts.component';

describe('YourRialAccountsComponent', () => {
  let component: YourRialAccountsComponent;
  let fixture: ComponentFixture<YourRialAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourRialAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourRialAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

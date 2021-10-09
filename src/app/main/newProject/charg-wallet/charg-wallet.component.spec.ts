import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargWalletComponent } from './charg-wallet.component';

describe('ChargWalletComponent', () => {
  let component: ChargWalletComponent;
  let fixture: ComponentFixture<ChargWalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChargWalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

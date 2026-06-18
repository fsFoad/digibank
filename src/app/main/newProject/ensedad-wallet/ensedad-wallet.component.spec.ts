import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsedadWalletComponent } from './ensedad-wallet.component';

describe('EnsedadWalletComponent', () => {
  let component: EnsedadWalletComponent;
  let fixture: ComponentFixture<EnsedadWalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnsedadWalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnsedadWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

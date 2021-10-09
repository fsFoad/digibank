import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatWalletComponent } from './creat-wallet.component';

describe('CreatWalletComponent', () => {
  let component: CreatWalletComponent;
  let fixture: ComponentFixture<CreatWalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatWalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

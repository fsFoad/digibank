import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchPayComponent } from './branch-pay.component';

describe('BranchPayComponent', () => {
  let component: BranchPayComponent;
  let fixture: ComponentFixture<BranchPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

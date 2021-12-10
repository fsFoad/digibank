import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpendituresAndRevenuesComponent } from './expenditures-and-revenues.component';

describe('ExpendituresAndRevenuesComponent', () => {
  let component: ExpendituresAndRevenuesComponent;
  let fixture: ComponentFixture<ExpendituresAndRevenuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpendituresAndRevenuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpendituresAndRevenuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

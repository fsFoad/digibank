import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatPersianCalendarComponent } from './mat-persian-calendar.component';

describe('MatPersianCalendarComponent', () => {
  let component: MatPersianCalendarComponent;
  let fixture: ComponentFixture<MatPersianCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatPersianCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatPersianCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

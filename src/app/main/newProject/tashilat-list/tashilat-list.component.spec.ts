import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TashilatListComponent } from './tashilat-list.component';

describe('TashilatListComponent', () => {
  let component: TashilatListComponent;
  let fixture: ComponentFixture<TashilatListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TashilatListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TashilatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

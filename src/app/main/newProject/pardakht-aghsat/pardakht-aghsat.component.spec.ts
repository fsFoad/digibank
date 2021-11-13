import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PardakhtAghsatComponent } from './pardakht-aghsat.component';

describe('PardakhtAghsatComponent', () => {
  let component: PardakhtAghsatComponent;
  let fixture: ComponentFixture<PardakhtAghsatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PardakhtAghsatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PardakhtAghsatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

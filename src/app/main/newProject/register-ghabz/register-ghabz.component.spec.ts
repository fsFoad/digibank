import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterGhabzComponent } from './register-ghabz.component';

describe('RegisterGhabzComponent', () => {
  let component: RegisterGhabzComponent;
  let fixture: ComponentFixture<RegisterGhabzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterGhabzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterGhabzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

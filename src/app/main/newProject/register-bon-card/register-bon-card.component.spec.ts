import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBonCardComponent } from './register-bon-card.component';

describe('RegisterBonCardComponent', () => {
  let component: RegisterBonCardComponent;
  let fixture: ComponentFixture<RegisterBonCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterBonCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterBonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

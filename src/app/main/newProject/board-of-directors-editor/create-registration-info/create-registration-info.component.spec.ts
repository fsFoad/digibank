import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRegistrationInfoComponent } from './create-registration-info.component';

describe('CreateRegistrationInfoComponent', () => {
  let component: CreateRegistrationInfoComponent;
  let fixture: ComponentFixture<CreateRegistrationInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRegistrationInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRegistrationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

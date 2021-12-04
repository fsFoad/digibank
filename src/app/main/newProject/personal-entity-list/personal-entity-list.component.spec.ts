import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalEntityListComponent } from './personal-entity-list.component';

describe('PersonalEntityListComponent', () => {
  let component: PersonalEntityListComponent;
  let fixture: ComponentFixture<PersonalEntityListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalEntityListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalEntityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

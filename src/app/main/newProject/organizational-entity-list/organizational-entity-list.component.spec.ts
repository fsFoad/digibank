import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationalEntityListComponent } from './organizational-entity-list.component';

describe('OrganizationalEntityListComponent', () => {
  let component: OrganizationalEntityListComponent;
  let fixture: ComponentFixture<OrganizationalEntityListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationalEntityListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationalEntityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

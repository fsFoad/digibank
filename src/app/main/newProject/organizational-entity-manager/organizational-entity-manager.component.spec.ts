import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationalEntityManagerComponent } from './organizational-entity-manager.component';

describe('OrganizationalEntityManagerComponent', () => {
  let component: OrganizationalEntityManagerComponent;
  let fixture: ComponentFixture<OrganizationalEntityManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationalEntityManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationalEntityManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOrganizationalEntityManagerComponent } from './update-organizational-entity-manager.component';

describe('UpdateOrganizationalEntityManagerComponent', () => {
  let component: UpdateOrganizationalEntityManagerComponent;
  let fixture: ComponentFixture<UpdateOrganizationalEntityManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateOrganizationalEntityManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOrganizationalEntityManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

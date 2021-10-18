import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationalRoleEditorComponent } from './organizational-role-editor.component';

describe('OrganizationalRoleEditorComponent', () => {
  let component: OrganizationalRoleEditorComponent;
  let fixture: ComponentFixture<OrganizationalRoleEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationalRoleEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationalRoleEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

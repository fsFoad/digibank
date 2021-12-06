import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOrganizationalRoleEditorComponent } from './update-organizational-role-editor.component';

describe('UpdateOrganizationalRoleEditorComponent', () => {
  let component: UpdateOrganizationalRoleEditorComponent;
  let fixture: ComponentFixture<UpdateOrganizationalRoleEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateOrganizationalRoleEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOrganizationalRoleEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

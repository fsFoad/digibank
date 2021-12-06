import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOrganizationalContactInfoEditorComponent } from './update-organizational-contact-info-editor.component';

describe('UpdateOrganizationalContactInfoEditorComponent', () => {
  let component: UpdateOrganizationalContactInfoEditorComponent;
  let fixture: ComponentFixture<UpdateOrganizationalContactInfoEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateOrganizationalContactInfoEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOrganizationalContactInfoEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationalContactInfoEditorComponent } from './organizational-contact-info-editor.component';

describe('OrganizationalContactInfoEditorComponent', () => {
  let component: OrganizationalContactInfoEditorComponent;
  let fixture: ComponentFixture<OrganizationalContactInfoEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationalContactInfoEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationalContactInfoEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

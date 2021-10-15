import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationalEntityDocumentsEditorComponent } from './organizational-entity-documents-editor.component';

describe('OrganizationalEntityDocumentsEditorComponent', () => {
  let component: OrganizationalEntityDocumentsEditorComponent;
  let fixture: ComponentFixture<OrganizationalEntityDocumentsEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationalEntityDocumentsEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationalEntityDocumentsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

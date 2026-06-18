import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOrganizationalEntityDocumentsEditorComponent } from './update-organizational-entity-documents-editor.component';

describe('UpdateOrganizationalEntityDocumentsEditorComponent', () => {
  let component: UpdateOrganizationalEntityDocumentsEditorComponent;
  let fixture: ComponentFixture<UpdateOrganizationalEntityDocumentsEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateOrganizationalEntityDocumentsEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOrganizationalEntityDocumentsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

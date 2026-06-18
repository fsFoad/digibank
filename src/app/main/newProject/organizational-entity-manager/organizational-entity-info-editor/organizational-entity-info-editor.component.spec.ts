import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationalEntityInfoEditorComponent } from './organizational-entity-info-editor.component';

describe('OrganizationalEntityInfoEditorComponent', () => {
  let component: OrganizationalEntityInfoEditorComponent;
  let fixture: ComponentFixture<OrganizationalEntityInfoEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationalEntityInfoEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationalEntityInfoEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

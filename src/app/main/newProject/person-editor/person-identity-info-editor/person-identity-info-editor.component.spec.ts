import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonIdentityInfoEditorComponent } from './person-identity-info-editor.component';

describe('PersonIdentityInfoEditorComponent', () => {
  let component: PersonIdentityInfoEditorComponent;
  let fixture: ComponentFixture<PersonIdentityInfoEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonIdentityInfoEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonIdentityInfoEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

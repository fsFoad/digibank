import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePersonIdentityInfoEditorComponent } from './update-person-identity-info-editor.component';

describe('UpdatePersonIdentityInfoEditorComponent', () => {
  let component: UpdatePersonIdentityInfoEditorComponent;
  let fixture: ComponentFixture<UpdatePersonIdentityInfoEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePersonIdentityInfoEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePersonIdentityInfoEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

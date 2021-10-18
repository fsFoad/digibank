import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonSupplementaryInfoEditorComponent } from './person-supplementary-info-editor.component';

describe('PersonSupplementaryInfoEditorComponent', () => {
  let component: PersonSupplementaryInfoEditorComponent;
  let fixture: ComponentFixture<PersonSupplementaryInfoEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonSupplementaryInfoEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonSupplementaryInfoEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

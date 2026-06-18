import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePartySignatureEditorComponent } from './update-party-signature-editor.component';

describe('UpdatePartySignatureEditorComponent', () => {
  let component: UpdatePartySignatureEditorComponent;
  let fixture: ComponentFixture<UpdatePartySignatureEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePartySignatureEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePartySignatureEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

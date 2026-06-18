import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GhobozUploadFileComponent } from './ghoboz-upload-file.component';

describe('GhobozUploadFileComponent', () => {
  let component: GhobozUploadFileComponent;
  let fixture: ComponentFixture<GhobozUploadFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GhobozUploadFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GhobozUploadFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

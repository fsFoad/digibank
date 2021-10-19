import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpOrDownloadComponent } from './up-or-download.component';

describe('UpOrDownloadComponent', () => {
  let component: UpOrDownloadComponent;
  let fixture: ComponentFixture<UpOrDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpOrDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpOrDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchYektaComponent } from './search-yekta.component';

describe('SearchYektaComponent', () => {
  let component: SearchYektaComponent;
  let fixture: ComponentFixture<SearchYektaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchYektaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchYektaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

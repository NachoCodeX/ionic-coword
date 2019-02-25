import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordViewPage } from './word-view.page';

describe('WordViewPage', () => {
  let component: WordViewPage;
  let fixture: ComponentFixture<WordViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

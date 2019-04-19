import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResentPage } from './resent.page';

describe('ResentPage', () => {
  let component: ResentPage;
  let fixture: ComponentFixture<ResentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

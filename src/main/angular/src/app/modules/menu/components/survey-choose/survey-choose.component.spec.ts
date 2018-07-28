import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyChooseComponent } from './survey-choose.component';

describe('SurveyChooseComponent', () => {
  let component: SurveyChooseComponent;
  let fixture: ComponentFixture<SurveyChooseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyChooseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

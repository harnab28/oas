import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McqSingleAnswerComponent } from './mcq-single-answer.component';

describe('McqSingleAnswerComponent', () => {
  let component: McqSingleAnswerComponent;
  let fixture: ComponentFixture<McqSingleAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McqSingleAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McqSingleAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

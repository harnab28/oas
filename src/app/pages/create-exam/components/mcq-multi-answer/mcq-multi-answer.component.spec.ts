import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McqMultiAnswerComponent } from './mcq-multi-answer.component';

describe('McqMultiAnswerComponent', () => {
  let component: McqMultiAnswerComponent;
  let fixture: ComponentFixture<McqMultiAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McqMultiAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McqMultiAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

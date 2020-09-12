import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionButtonListComponent } from './question-button-list.component';

describe('QuestionButtonListComponent', () => {
  let component: QuestionButtonListComponent;
  let fixture: ComponentFixture<QuestionButtonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionButtonListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionButtonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

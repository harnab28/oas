import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamQuestionComponent } from './exam-question/exam-question.component';
import { FormsModule } from '@angular/forms';
import { McqSingleAnswerComponent } from './components/mcq-single-answer/mcq-single-answer.component';
import { McqMultiAnswerComponent } from './components/mcq-multi-answer/mcq-multi-answer.component';
import { QuestionButtonListComponent } from './components/question-button-list/question-button-list.component';

@NgModule({
  declarations: [
    ExamQuestionComponent,
    McqSingleAnswerComponent,
    McqMultiAnswerComponent,
    QuestionButtonListComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [ExamQuestionComponent],
})
export class CreateExamModule {}

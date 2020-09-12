import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamQuestionComponent } from './exam-question/exam-question.component';
import { FormsModule } from '@angular/forms';
import { McqSingleAnswerComponent } from './components/mcq-single-answer/mcq-single-answer.component';
import { McqMultiAnswerComponent } from './components/mcq-multi-answer/mcq-multi-answer.component'



@NgModule({
  declarations: [ ExamQuestionComponent, McqSingleAnswerComponent, McqMultiAnswerComponent ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ExamQuestionComponent
  ] 
})
export class CreateExamModule { 

}

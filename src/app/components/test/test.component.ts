import { Component, OnInit } from '@angular/core';
import { TestserviceService } from '../../services/testservice.service';
import { question, answer } from '../../question.interface';

@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent{

  questionBank: question[];
  questionAnswer: answer;
  answerList: any = [];
  endTime: string = '300';

  constructor(private ts: TestserviceService) {
    this.questionBank = ts.getQuestion();
    console.log(this.questionBank);

    //setting answers
    this.answerList = this.questionBank.map((questionData) => ({
      questionId: questionData.questionId,
      questionType: questionData.questionType,
      answer: [],
      correctAns: questionData.correctOption,
    }));

    //setting timer
   

    console.log(this.answerList);
  }

  
  check() {}

  isAnswerChecked(answerOptions, answer) {

    return !!answerOptions.includes(answer);
  }

  onAnswerChange(questionIndex, answer) {
    if (this.answerList[questionIndex].answer.includes(answer)) {
      this.answerList[questionIndex].answer.filter(
        (answers) => answers != answer
      );
    } else {
      this.answerList[questionIndex].answer.push(answer);
    }
  }

}

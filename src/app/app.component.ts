import { Component } from '@angular/core';
import { TestserviceService } from './services/testservice.service';
import { question, answer } from './question.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'OASys';
  questionBank: question[];
  questionAnswer: answer;
  answerList: any = [];

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
    //this.startTimer();

    console.log(this.answerList);
  }

  //timer realted variables
  timer: any = null;
  startTime: Date;
  endTime: Date;
  ellapsedTime = '00:00';
  duration = '';

  startTimer() {
    this.startTime = new Date();
    this.ellapsedTime = '00:00';
    this.timer = setInterval(() => {
      this.tick();
    }, 1000);
    this.duration = this.parseTime(300);
  }

  parseTime(totalSeconds: number) {
    let mins: string | number = Math.floor(totalSeconds / 60);
    let secs: string | number = Math.round(totalSeconds % 60);
    mins = (mins < 10 ? '0' : '') + mins;
    secs = (secs < 10 ? '0' : '') + secs;
    return `${mins}:${secs}`;
  }

  tick() {
    const now = new Date();
    const diff = (now.getTime() - this.startTime.getTime()) / 1000;
    if (diff >= 300) {
      //this.onSubmit();
    }
    this.ellapsedTime = this.parseTime(diff);
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

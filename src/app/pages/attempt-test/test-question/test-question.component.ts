import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TestService } from '../../../services/test-service.service';

@Component({
  selector: 'app-test-question',
  templateUrl: './test-question.component.html',
  styleUrls: ['./test-question.component.scss'],
})
export class TestQuestionComponent implements OnInit {
  questionBank: any[] = [];
  questionList: any = {};
  answerList: any = [];
  candidateName: string = '';

  selectedQuestionIndex: any = 0;

  constructor(private ts: TestService, private router: Router) {
    //start timer
    this.startTimer(60);
  }

  async ngOnInit() {
    await this.handleSetQuestionListing();
    await this.handleGetQuestionListing();
    //setting answers
  }

  handleGetQuestionListing() {
    return this.ts.getQuestionListing().subscribe((response) => {
      this.questionList = response;
      this.selectedQuestionIndex = 0;

      this.questionBank = Object.keys(this.questionList).reduce(
        (accumulator, questionType) =>
          accumulator.concat(this.questionList[questionType]),
        []
      );

      console.log('this.questionBank', this.questionBank);

      this.answerList = this.questionBank.map((questionData) => ({
        questionId: questionData.questionId,
        questionType: questionData.questionType,
        answerResponse: [],
      }));

      console.log('this.questionBank', this.answerList);
    });
  }

  handleSetQuestionListing() {
    return this.ts.setQuestionListing().subscribe((response) => {
      console.log(response);
    });
  }

  singleMcq(event, questionIndex) {
    this.answerList[questionIndex].answerResponse = event;
  }

  multiMcq(event, questionIndex) {
    this.answerList[questionIndex].answerResponse = [];
    this.answerList[questionIndex].answerResponse = event;
  }

  prev() {
    if (this.selectedQuestionIndex > 0) this.selectedQuestionIndex--;
  }

  remove() {
    this.answerList[this.selectedQuestionIndex].answerResponse = [];
  }

  next() {
    if (this.selectedQuestionIndex < this.questionBank.length - 1)
      this.selectedQuestionIndex++;
  }

  clickedButton(selectedQuestionIndex) {
    console.log(selectedQuestionIndex);
    this.selectedQuestionIndex = selectedQuestionIndex;
    console.log(this.questionBank[selectedQuestionIndex]);
  }

  //timer realted variables
  timer: any = null;
  startTime: Date;
  endTime: Date;
  ellapsedTime = '00:00';
  duration = '';

  startTimer(t) {
    this.startTime = new Date();
    this.ellapsedTime = '00:00';
    this.timer = setInterval(() => {
      this.tick(t);
    }, 1000);
    this.duration = this.parseTime(t);
  }

  parseTime(totalSeconds: number) {
    let mins: string | number = Math.floor(totalSeconds / 60);
    let secs: string | number = Math.round(totalSeconds % 60);
    mins = (mins < 10 ? '0' : '') + mins;
    secs = (secs < 10 ? '0' : '') + secs;
    return `${mins}:${secs}`;
  }

  tick(t) {
    const now = new Date();
    const diff = (now.getTime() - this.startTime.getTime()) / 1000;
    if (diff >= t) {
      this.onSubmit();
    }
    this.ellapsedTime = this.parseTime(diff);
  }

  onSubmit() {
    clearInterval(this.timer);
    this.router.navigate(['/end-test']);
    // this.ts.setResponse(this.candidateName, this.answerList);
    // console.log(this.ts.getResponse());
    // this.router.navigateByUrl['/endtest'];
  }
}

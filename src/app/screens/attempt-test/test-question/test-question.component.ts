import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { TestService } from '../../../services/test-service.service';
import { CONST_QUESTION_LIST } from '../../../utils/constant.js';

@Component({
  selector: 'app-test-question',
  templateUrl: './test-question.component.html',
  styleUrls: ['./test-question.component.scss'],
})
export class TestQuestionComponent implements OnInit, OnDestroy {
  questionBank: any[] = [];
  questionList: any = {};
  answerList: any = [];
  candidateName: string = 'Arnab';
  candidateId: string = '11413197';

  selectedQuestionIndex: any;
  selectedQuestion: any = {};

  //timer realted variables
  timer: any = null;
  startTime: Date;
  endTime: Date;
  ellapsedTime = '00:00';
  duration = '';

  setQuestionListingSubscription: Subscription;
  getQuestionListingSubscription: Subscription;
  postAnswerListingSubscription: Subscription;

  constructor(private ts: TestService, private router: Router) {
    this.startTimer(60 * 10); //start timer
  }

  ngOnInit() {
    // this.handleSetQuestionListing();
    // this.handleGetQuestionListing();
    //setting answers
    this.questionList = CONST_QUESTION_LIST;

    this.questionBank = Object.keys(this.questionList).reduce(
      (accumulator, questionType) =>
        accumulator.concat(this.questionList[questionType]),
      []
    );
    console.log('this.questionBank', this.questionBank);

    this.selectedQuestionIndex = 0;
    this.selectedQuestion = this.questionBank[0];

    this.answerList = this.questionBank.map((questionData, index) => ({
      questionId: questionData.questionId,
      questionSequenceNumber: index + 1,
      questionType: questionData.questionType,
      answerResponse: [],
    }));

    console.log('this.answerList', this.answerList);
  }

  // handleGetQuestionListing() {
  //   this.getQuestionListingSubscription = this.ts
  //     .getQuestionListing()
  //     .subscribe((response) => {
  //     });
  // }

  // handleSetQuestionListing() {
  //   this.setQuestionListingSubscription = this.ts
  //     .setQuestionListing()
  //     .subscribe((response) => {
  //       console.log(response);
  //     });
  // }

  postAnswerList;

  handlePostAnswerListing() {
    const body = {
      candidateID: this.candidateId,
      candidateName: this.candidateName,
      response: this.answerList,
    };

    this.postAnswerListingSubscription = this.ts
      .postAnswerList(body)
      .subscribe((response) => {
        console.log(response);
      });
  }

  singleMcq(event, questionIndex) {
    this.answerList[questionIndex].answerResponse = event;
  }

  multiMcq(event, questionIndex) {
    console.log(event, questionIndex);
    // this.answerList[questionIndex].answerResponse = [];
    this.answerList[questionIndex].answerResponse = event;
  }

  prev() {
    if (this.selectedQuestionIndex > 0) {
      this.selectedQuestionIndex = this.selectedQuestionIndex - 1;
      this.selectedQuestion = this.questionBank[this.selectedQuestionIndex];
    }
  }

  remove() {
    this.answerList[this.selectedQuestionIndex].answerResponse = [];
  }

  next() {
    if (this.selectedQuestionIndex < this.questionBank.length - 1) {
      this.selectedQuestionIndex = this.selectedQuestionIndex + 1;
      this.selectedQuestion = this.questionBank[this.selectedQuestionIndex];
    }
  }

  clickedButton(selectedQuestionIndex) {
    this.selectedQuestionIndex = selectedQuestionIndex;
    this.selectedQuestion = this.questionBank[this.selectedQuestionIndex];
  }

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
    console.log(this.answerList);
    clearInterval(this.timer);
    this.handlePostAnswerListing();
    // this.router.navigate(['/end-test']);
    // this.ts.setResponse(this.candidateName, this.answerList);
    // console.log(this.ts.getResponse());
    // this.router.navigateByUrl['/endtest'];
  }

  ngOnDestroy() {
    this.setQuestionListingSubscription.unsubscribe();
    this.getQuestionListingSubscription.unsubscribe();
  }
}

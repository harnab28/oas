import { Component, OnInit } from '@angular/core';

import { TestService } from '../../../services/test-service.service';

@Component({
  selector: 'app-exam-question',
  templateUrl: './exam-question.component.html',
  styleUrls: ['./exam-question.component.scss'],
})
export class ExamQuestionComponent implements OnInit {
  questionBank: any[] = [];
  answerList: any = [];
  candidateName: string = '';

  selectedIndex: any;

  constructor(private ts: TestService) {
    //start timer
    this.startTimer(60);
  }

  ngOnInit() {
    this.handleSetQuestionListing();
    this.handleGetQuestionListing();
    //setting answers

    this.selectedIndex = 0;

    this.answerList = this.questionBank.map((questionData) => ({
      questionId: questionData.questionId,
      questionType: questionData.questionType,
      answerResponse: [],
    }));
  }

  handleGetQuestionListing() {
    return this.ts.getQuestionListing().subscribe((response) => {
      console.log(response);
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
    if (this.selectedIndex > 0) this.selectedIndex--;
  }

  remove() {
    this.answerList[this.selectedIndex].answerResponse = [];
  }

  next() {
    if (this.selectedIndex < this.questionBank.length - 1) this.selectedIndex++;
  }

  clickedButton(event) {
    this.selectedIndex = event;
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
    // this.ts.setResponse(this.candidateName, this.answerList);
    // console.log(this.ts.getResponse());
    // this.router.navigateByUrl['/endtest'];
  }
}

import { Component, OnInit } from '@angular/core';

import { TestserviceService } from '../../../services/testservice.service';
import { question } from '../../../question.interface'


@Component({
  selector: 'app-exam-question',
  templateUrl: './exam-question.component.html',
  styleUrls: ['./exam-question.component.scss']
})
export class ExamQuestionComponent implements OnInit {


  questionBank: question[];
  answerList: any = [];

  selectedIndex: any;

  constructor(private ts: TestserviceService) {
    this.questionBank = this.ts.getQuestion();
    //setting answers

    this.selectedIndex = 0;

    this.answerList = this.questionBank.map((questionData) => ({
      questionId: questionData.questionId,
      questionType: questionData.questionType,
      answer: [],
      correctAns: questionData.correctOption,
    }));

  }

  ngOnInit(): void {

  }
  singleMcq(event, questionIndex) {
    this.answerList[questionIndex].answer = [];
    this.answerList[questionIndex].answer.push(event);
    console.log(questionIndex, 'a', this.answerList[questionIndex])
  }

  multiMcq(event, questionIndex) {
    this.answerList[questionIndex].answer = [];
    this.answerList[questionIndex].answer = event;
    console.log(this.answerList[questionIndex].answer, questionIndex);
  }

  prev() {
    if (this.selectedIndex > 0)
      this.selectedIndex--;
  }

  remove() {
    this.answerList[this.selectedIndex].answer = []
    console.log(this.selectedIndex, 'b', this.answerList[this.selectedIndex])
  }

  next() {
    if (this.selectedIndex < this.questionBank.length - 1)
      this.selectedIndex++;
  }

  clickedButton(event){
    this.selectedIndex = event;
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

  onSubmit() {

  }

}

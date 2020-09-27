import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mcq-multi-answer',
  templateUrl: './mcq-multi-answer.component.html',
  styleUrls: ['./mcq-multi-answer.component.scss'],
})
export class McqMultiAnswerComponent implements OnInit {
  @Input() question: any;
  @Input() selectedAnswer: any;
  @Output() emitSelectedAnswer = new EventEmitter<string[]>();

  constructor() {}

  ngOnInit(): void {
    this.selectedAnswer;
    console.log(this.selectedAnswer, this.question);
  }

  ngOnChanges(changes: any) {
    console.log(changes);
    this.question = !!changes.question
      ? changes.question.currentValue
      : this.question;
  }

  onAnswerChange(answer) {
    const index = this.selectedAnswer.indexOf(answer);
    if (index > -1) {
      this.selectedAnswer.splice(index, 1);
    } else {
      this.selectedAnswer.push(answer);
    }
    this.emitSelectedAnswer.emit(this.selectedAnswer);
  }

  isAnswerChecked(answer) {
    return this.selectedAnswer.includes(answer);
  }
}

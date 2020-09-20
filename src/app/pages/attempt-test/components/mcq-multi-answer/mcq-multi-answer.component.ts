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

  answer = [];

  constructor() {}

  ngOnInit(): void {}

  onAnswerChange(answer) {
    const index = this.answer.indexOf(answer);
    if (index > -1) {
      this.answer.splice(index, 1);
    } else {
      this.answer.push(answer);
    }
    this.emitSelectedAnswer.emit(this.answer);
  }

  isAnswerChecked(answer) {
    return this.answer.includes(answer);
  }
}

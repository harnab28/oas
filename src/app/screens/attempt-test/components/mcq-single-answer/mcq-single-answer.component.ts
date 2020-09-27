import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mcq-single-answer',
  templateUrl: './mcq-single-answer.component.html',
  styleUrls: ['./mcq-single-answer.component.scss'],
})
export class McqSingleAnswerComponent implements OnInit {
  @Input() question: any;
  @Input() selectedAnswer: any;
  @Output() emitSelectedAnswer = new EventEmitter<string[]>();
  constructor() {}

  ngOnInit() {
    console.log('ngOnInit ', this.selectedAnswer);
  }

  selectOption(selectedOption) {
    console.log(selectedOption);
    if (this.selectedAnswer.indexOf(selectedOption) > -1) {
      // event.target.checked = false;
      this.selectedAnswer = [];
    } else {
      // event.target.checked = true;
      this.selectedAnswer = [selectedOption];
    }
    this.emitSelectedAnswer.emit(this.selectedAnswer);
  }
}

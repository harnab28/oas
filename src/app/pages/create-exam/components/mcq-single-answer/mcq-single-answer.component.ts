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
  answer: string[];
  constructor() {}

  ngOnInit() {
    console.log('ngOnInit ', this.selectedAnswer);
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit ', this.selectedAnswer);
  }

  ngViewContentInit() {
    console.log('ngViewContentInit ', this.selectedAnswer);
  }

  ngViewContentChecked() {
    console.log('ngViewContentChecked ', this.selectedAnswer);
  }

  selectOption(event) {
    console.log(this.selectedAnswer);
    if (this.answer == event.target.value) {
      event.target.checked = false;
      this.answer = [];
    } else {
      event.target.checked = true;
      this.answer = event.target.value;
    }
    this.emitSelectedAnswer.emit(this.answer);
  }
}

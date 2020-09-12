import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mcq-single-answer',
  templateUrl: './mcq-single-answer.component.html',
  styleUrls: ['./mcq-single-answer.component.scss']
})
export class McqSingleAnswerComponent implements OnInit {

  @Input() question: any;
  @Output() emitAnswer = new EventEmitter<string>();
  answer : string;
  constructor() { }

  ngOnInit(): void {
  }

  selectOption(event){
    
    this.emitAnswer.emit(event.target.value);
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mcq-single-answer',
  templateUrl: './mcq-single-answer.component.html',
  styleUrls: ['./mcq-single-answer.component.scss']
})
export class McqSingleAnswerComponent implements OnInit {

  @Input() question: any;
  @Output() emitAnswer = new EventEmitter<string[]>();
  answer :string[]; 
  constructor() { }

  ngOnInit(): void {
  }

  selectOption(event){
    if(this.answer == event.target.value)
    {
        event.target.checked = false;
        this.answer = [];
    }
    else
    {
      event.target.checked = true;
      this.answer = event.target.value;
    }
      this.emitAnswer.emit(this.answer);
  }

}

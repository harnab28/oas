import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'questionButtonList',
  templateUrl: './question-button-list.component.html',
  styleUrls: ['./question-button-list.component.scss'],
})
export class QuestionButtonListComponent implements OnInit {
  @Input() numberOfButtons: number;

  @Output() emitSelectedButton = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  counter(i: number) {
    return new Array(i);
  }

  selectedButton(qno) {
    this.emitSelectedButton.emit(qno);
  }
}

import { Injectable } from '@angular/core';
import { QuestionBank } from '../question.interface';

@Injectable({
  providedIn: 'root',
})
export class TestserviceService {
  question: any;

  constructor() {
    this.question = QuestionBank;
  }

  getQuestion() {
    return this.question;
  }
}

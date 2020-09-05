import { Component } from '@angular/core';
import { TestserviceService } from './services/testservice.service';
import { question, answer } from './question.interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  title = 'OASys';
  questionBank: question[];
  questionAnswer: answer;

  answerList : any = [];
  

  test : string;

  constructor(private ts : TestserviceService){
    this.questionBank = ts.getQuestion();
    console.log(this.questionBank)
    this.answerList = this.questionBank.map(questionData => ({
      questionId: questionData.questionId,
      answer : null
    }))


    
  }


  check(){
    console.log(this.answerList);
  }

  createans(){

  }


}

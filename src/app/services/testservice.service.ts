import { Injectable } from '@angular/core';
import { QuestionBank } from '../question.interface';

@Injectable({
  providedIn: 'root'
})
export class TestserviceService {
  
  question : any;
  candidateResponse : any;
  
  constructor() { 
    
  }

  getQuestion(){
    var q1 = QuestionBank.listOfMultipleAnswerTypeMcq.map( (question) =>({
      "questionId": question.questionId,
      "questionType": question.questionType,
      "questionText": question.questionText,
      "questionDifficulty": question.questionDifficulty,
      "options" : question.options,
      "answers": question.answers,
      "questionMarks": question.questionMarks
    }));

    var q2 = QuestionBank.listOfSingleAnswerTypeMcq.map( (question) =>({
      "questionId": question.questionId,
      "questionType": question.questionType,
      "questionText": question.questionText,
      "questionDifficulty": question.questionDifficulty,
      "options" : question.options,
      "answer": question.answer,
      "questionMarks": question.questionMarks
    }));

    this.question = [...q1,...q2];

    return (this.question);

  }

  setResponse(candidateName: string, answerResponse: any []){
    var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    var candidateId = randLetter + Date.now();
    this.candidateResponse = {
      "candidateId" : candidateId,
      "candidateName": candidateName,
      "response" : answerResponse
    }
  }

  getResponse(){
    return this.candidateResponse;
  }



}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { QuestionBank } from '../question.interface';
import {
  LOCAL_BACKEND_ORIGIN_URL,
  GET_QUESTION_LISTING,
  SET_QUESTION_LISTING,
} from '../utils/routes.js';
import { CONST_QUESTION_LIST } from '../utils/constant.js';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  question: any;
  candidateResponse: any;

  constructor(private http: HttpClient) {}

  // Http Options
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  });

  setQuestionListing(): Observable<any[]> {
    const url = LOCAL_BACKEND_ORIGIN_URL + SET_QUESTION_LISTING;
    return this.http
      .post<any[]>(url, CONST_QUESTION_LIST)
      .pipe(retry(1), catchError(this.handleError));
  }

  getQuestionListing(): Observable<any> {
    const url = LOCAL_BACKEND_ORIGIN_URL + GET_QUESTION_LISTING;
    return this.http
      .get<any>(url, { headers: this.headers })
      .pipe(catchError(this.handleError));
  }

  // Error handling
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Answer} from "../../models/answer";

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  static ENDPOINT_URL = 'http://localhost:8080/answers/';

  constructor(private http: HttpClient) { }

  persist(answers: object, surveyId: number, contactId: number) {
      return this.http.post(AnswerService.ENDPOINT_URL, new Answer(answers, surveyId, contactId));
  }

  getBySurvey(id: number) {
    return this.http.get<Answer[]>(AnswerService.ENDPOINT_URL + "survey/" + id);
  }
}

import { Injectable } from '@angular/core';
import {Question} from '../../models/question';
import {Survey} from '../../models/survey';
import {el} from '@angular/platform-browser/testing/src/browser_util';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  static ENDPOINT_URL = 'http://localhost:8080/surveys/';

  constructor(private http: HttpClient) {
  }

  persist(survey: Survey) {
    console.log(JSON.stringify(survey));
    return this.http.post(SurveyService.ENDPOINT_URL, survey);
  }

  get(id: number): Observable<Survey> {
    return this.http.get<Survey>(SurveyService.ENDPOINT_URL + id);
  }

  getAll() {
    console.log("geting all surveys");
    return this.http.get<Survey[]>(SurveyService.ENDPOINT_URL);
  }
}

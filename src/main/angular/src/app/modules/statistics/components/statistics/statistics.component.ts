import { Component, OnInit } from '@angular/core';
import {SurveyService} from "../../../../services/survey-service/survey.service";
import {Survey} from "../../../../models/survey";
import {ContactService} from "../../../../services/contact-service/contact.service";
import {Contact} from "../../../../models/contact";
import {AnswerService} from "../../../../services/answer-service/answer.service";
import {Answer} from "../../../../models/answer";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
})
export class StatisticsComponent {

  constructor(private surveyService: SurveyService, private answerService: AnswerService) {
      this.surveyService.getAll().subscribe(surveys => {
        this.surveys = surveys;
      })
  }

  selectSurvey(surveyId) {
    console.log('dupa');
    this.answerService.getBySurvey(surveyId).subscribe(answers => {
      this.answers = answers;
      console.log(this.answers);
    });
  }

  answers: Answer[];
  surveys: Survey[];
}

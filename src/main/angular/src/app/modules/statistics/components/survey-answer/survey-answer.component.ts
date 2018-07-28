import { Component, OnInit, Input } from '@angular/core';
import {Contact} from "../../../../models/contact";
import {Survey} from "../../../../models/survey";
import {Answer} from "../../../../models/answer";
import {SurveyService} from "../../../../services/survey-service/survey.service";
import {ContactService} from "../../../../services/contact-service/contact.service";

@Component({
  selector: 'survey-answer',
  templateUrl: './survey-answer.component.html',
})
export class SurveyAnswerComponent implements OnInit {

  contact: Contact;
  survey: Survey;
  @Input() answer: Answer;
  constructor(private surveyService: SurveyService, private contactService: ContactService, ) {

  }

  ngOnInit() {
      this.surveyService.get(this.answer.surveyId).subscribe((survey) => {
          this.survey = survey;
      });

      this.contactService.get(this.answer.contactId).subscribe((contact) => {
          this.contact = contact;
      })
  }

}

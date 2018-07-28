import { Component } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Survey} from "../../../../models/survey";
import {Contact} from "../../../../models/contact";
import {Question} from "../../../../models/question";
import {SurveyService} from "../../../../services/survey-service/survey.service";
import {ContactService} from "../../../../services/contact-service/contact.service";
import {Schema} from "../../../../models/schema";

@Component({
  selector: 'survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent {
  survey: Survey;
  contact: Contact;
  lastId = undefined;
  questionSchema: Question;
  isPanelActive = false;
  isEditable = true;

  constructor(private activatedRoute: ActivatedRoute, private surveyService: SurveyService, private contactService: ContactService) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.isEditable = params.hasOwnProperty('edit');
      const id = params['id'];
      const contactId = params['contactId'];
      if(id && contactId) {
          surveyService.get(params['id']).subscribe((survey) => {
              this.survey = survey;
              this.survey.id = id;
          });
          contactService.get(contactId).subscribe((contact) => {
              this.contact = contact;
          });
      }

      if (params.hasOwnProperty('new')) {
        console.log("create survey");
        this.survey = new Survey(undefined, '', new Schema());
        console.log("created:");
        console.log(this.survey);
        this.isEditable = true;
      }
    });
  }

  onSave(question) {
    if (this.lastId === undefined || this.lastId < question.id) {
      this.survey.schema.fields.push(question);
      this.lastId = question.id;
    }
    console.log(question);
    console.log(this.survey.schema);
    console.log(this.lastId);
  }

  onEdit(question) {
    console.log('reveived to edit in main');
    this.questionSchema = question;
    this.isPanelActive = true;
  }

  onRemove(question) {
    console.log('removing ' + JSON.stringify(question));
    const index = this.survey.schema.fields.indexOf(question);
    this.survey.schema.fields.splice(index, 1);
    console.log(this.survey.schema);
  }

  onPanelToggle(isPanelActive: boolean) {
    this.isPanelActive = isPanelActive;
  }
}

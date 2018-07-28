import { Component } from '@angular/core';
import {MatDialog} from '@angular/material';
import {ContactCreateDialogComponent} from './contact-create-dialog/contact-create-dialog.component';
import {Survey} from "../../../../models/survey";
import {Contact} from "../../../../models/contact";
import {SurveyService} from "../../../../services/survey-service/survey.service";
import {ContactService} from "../../../../services/contact-service/contact.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-survey-choose',
  templateUrl: './survey-choose.component.html',
  styleUrls: ['./survey-choose.component.css']
})
export class SurveyChooseComponent {

  surveys: Survey[];
  contacts: Contact[];
  chosenSurvey: Survey;
  chosenContact: Contact;
  constructor(private surveyService: SurveyService, private contactService: ContactService,
              private router: Router, public dialog: MatDialog) {
    this.surveyService.getAll().subscribe((surveys) => {
      this.surveys = surveys;
    });

    this.loadContacts();
  }

  private loadContacts() {
    this.contactService.getAll().subscribe((contacts) => {
      this.contacts = contacts;
    });
  }

  fill() {
    console.log(this.chosenSurvey);
    this.router.navigateByUrl('/survey;id=' + this.chosenSurvey.id + ';contactId=' + this.chosenContact.id);
  }

  createContact() {
    const dialogRef = this.dialog.open(ContactCreateDialogComponent, {
      width: '250px',
      data: {
        name: ''
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      const contact = new Contact(undefined, result);
      this.contactService.persist(contact).subscribe(() => {
        this.loadContacts();
      });
    });
  }
}

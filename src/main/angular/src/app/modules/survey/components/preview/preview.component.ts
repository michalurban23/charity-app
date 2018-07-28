import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatDialog, MatSnackBar} from '@angular/material';
import {ChangeNameDialogComponent} from './change-name-dialog/change-name-dialog.component';
import {Router} from '@angular/router';
import {Question} from "../../../../models/question";
import {Survey} from "../../../../models/survey";
import {Contact} from "../../../../models/contact";
import {AnswerService} from "../../../../services/answer-service/answer.service";
import {SurveyService} from "../../../../services/survey-service/survey.service";
import {QuestionAnswer} from "../../../../models/question-answer";


@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent {

  @Output() editQuestion = new EventEmitter<Question>();
  @Output() removeQuestion = new EventEmitter<Question>();
  @Input() survey: Survey;
  @Input() contact: Contact;
  @Input() isEditable: boolean;
  answers: object = {};

  constructor(private router: Router, private answerService: AnswerService, private surveyService: SurveyService,
              public dialog: MatDialog, public snackBar: MatSnackBar) {
    console.log("survey in preview component");
    console.log(this.survey);
  }

  edit(question) {
    this.editQuestion.emit(question);
  }

  remove(question) {
    this.removeQuestion.emit(question);
  }

  onResponseChange(response: QuestionAnswer) {
    this.answers[response.key] = response.values;
    console.log(this.answers);
  }

  send() {
    this.answerService.persist(this.answers, Number(this.survey.id), Number(this.contact.id)).subscribe((response) => {
      console.log(response);
        this.snackBar.open("Ankieta wypelniona", "OK");

        this.snackBar._openedSnackBarRef.afterDismissed().subscribe(() => {
            this.router.navigateByUrl("/");
        })
    });
  }

  save() {
    this.surveyService.persist(this.survey).subscribe((response) => {
        console.log(response);
        this.snackBar.open("Ankieta zapisana", "OK");

        this.snackBar._openedSnackBarRef.afterDismissed().subscribe(() => {
            this.router.navigateByUrl("/");
        })
    });
  }

  editName() {
    const dialogRef = this.dialog.open(ChangeNameDialogComponent, {
      width: '250px',
      data: {
        name: this.survey.name
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.survey.name = result;
    });
  }
}


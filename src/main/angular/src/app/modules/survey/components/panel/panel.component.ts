import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Question} from "../../../../models/question";
import {QuestionType} from "../../../../models/question-type.enum";

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
})
export class PanelComponent {
  @Output() saveQuestion = new EventEmitter<Question>();
  @Output() togglePanel = new EventEmitter<boolean>();
  @Input() questionSchema: Question;
  @Input() isPanelActive;
  generatorIsValid = false;

  toggleCreator() {
    this.isPanelActive = !this.isPanelActive;
    this.togglePanel.emit(this.isPanelActive);
  }

  questionTypesKeys() {
    return Object.keys(QuestionType);
  }

  questionTypesValue(key) {
    return QuestionType[key];
  }

  onCreate() {
    this.questionSchema = new Question();
    this.toggleCreator();
  }

  save(question) {
    this.saveQuestion.emit(question);
    this.toggleCreator();
  }

  discard() {
    this.toggleCreator();
  }

  isValid() {
    return this.questionSchema.type;
  }
}

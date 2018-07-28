import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Question} from "../../../../../models/question";
import {QuestionAnswer} from "../../../../../models/question-answer";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent{
  @Input() questionSchema: Question;
  @Output() responseChange = new EventEmitter<QuestionAnswer>();
  values: string[] = [];

  constructor() {
      console.log("question schema in question component");
      console.log(this.questionSchema);
  }

  onValuesChange(values) {
console.log(values);
    this.values = values;
    const key = this.questionSchema.model ? this.questionSchema.model : this.questionSchema.label;

    const response = new QuestionAnswer(key, this.values);
    console.log(response);
    this.responseChange.emit(response);
  }
}

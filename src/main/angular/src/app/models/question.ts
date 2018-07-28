import {QuestionType} from './question-type.enum';

export class Question {
  static nextId = 0;
  label: string;
  type: QuestionType;
  model: string;
  placeholder: string;
  values: string[];
  required: boolean;
  id: number;
  lineup: number;

  constructor() {
    this.label = '';
    this.type = undefined;
    this.model = undefined;
    this.values = [];
    this.placeholder = '';
    this.required = false;
    this.id = undefined;
    this.lineup = Question.nextId++;
  }
}

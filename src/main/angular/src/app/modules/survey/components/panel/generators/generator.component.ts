import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Question} from "../../../../../models/question";

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
})
export class GeneratorComponent {
  @Output() saveQuestion = new EventEmitter<Question>();
  @Input() questionSchema: Question;

}

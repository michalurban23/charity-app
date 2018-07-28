import {Input} from '@angular/core';
import {Question} from "../../../../../../../models/question";

export class SimpleGeneratorComponent {
    @Input() questionSchema: Question;
}

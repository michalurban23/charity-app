import {Input} from "@angular/core";
import {Question} from "../../../../../../../models/question";

export class MultipleGeneratorComponent {

    @Input() questionSchema: Question;

    add() {
        this.questionSchema.values.push('');
        console.log(this.questionSchema);
    }

    trackByFn(index: any, item: any) {
        return index;
    }

}

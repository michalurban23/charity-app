import {EventEmitter, Input, Output} from '@angular/core';
import {Question} from "../../../../../../../models/question";

export class SinglePreviewComponent {

    @Input() questionSchema: Question;
    @Output() valuesChange = new EventEmitter<string[]>();
    value: string;

    onChange() {
        this.valuesChange.emit([this.value]);
    }

}

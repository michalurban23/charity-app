import {EventEmitter, Input, Output, OnInit} from '@angular/core';
import {Question} from "../../../../../../../models/question";

export class MutliplePreviewComponent implements OnInit {

    @Input() questionSchema: Question;
    @Output() valuesChange = new EventEmitter<string[]>();
    values: object = {};

    onChange() {
        this.valuesChange.emit(this.valuesToArray());
    }

    valuesToArray(): string[] {
        let result = [];
        for (let key in this.values) {
            if (this.values[key]) {
                result.push(key);
            }
        }
        return result;
    }

    ngOnInit() {
        this.questionSchema.values.forEach((value) => {
            this.values[value] = false;
        });
    }

    atLeastOne() {
        return Object.values(this.values).some(value => value);
    }

}

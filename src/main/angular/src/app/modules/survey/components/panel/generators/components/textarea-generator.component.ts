import {Component} from '@angular/core';
import {SimpleGeneratorComponent} from "./abstract/simple-generator.component";

@Component({
  selector: 'textarea-generator',
  templateUrl: '../templates/textarea-generator.component.html',
})
export class TextareaGeneratorComponent extends SimpleGeneratorComponent {
}

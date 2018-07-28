import {Component} from '@angular/core';
import {MultipleGeneratorComponent} from "./abstract/multiple-generator.component";

@Component({
  selector: 'checkbox-generator',
  templateUrl: '../templates/checkbox-generator.component.html',
})
export class CheckboxGeneratorComponent extends MultipleGeneratorComponent {
}

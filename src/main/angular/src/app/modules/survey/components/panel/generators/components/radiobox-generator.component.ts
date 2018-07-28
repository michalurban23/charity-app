import { Component } from '@angular/core';
import {MultipleGeneratorComponent} from "./abstract/multiple-generator.component";

@Component({
  selector: 'radiobox-generator',
  templateUrl: '../templates/radiobox-generator.component.html'
})
export class RadioboxGeneratorComponent extends MultipleGeneratorComponent {
}

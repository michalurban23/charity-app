import {Component} from '@angular/core';
import {SinglePreviewComponent} from "./abstract/single-preview.component";

@Component({
  selector: 'input-text-preview',
  templateUrl: '../templates/input-text-preview.component.html',
})
export class InputTextPreviewComponent extends SinglePreviewComponent {
}

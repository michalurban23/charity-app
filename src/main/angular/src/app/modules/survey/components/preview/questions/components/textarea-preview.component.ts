import {Component} from '@angular/core';
import {SinglePreviewComponent} from "./abstract/single-preview.component";

@Component({
  selector: 'textarea-preview',
  templateUrl: '../templates/textarea-preview.component.html',
})
export class TextareaPreviewComponent extends SinglePreviewComponent {
}

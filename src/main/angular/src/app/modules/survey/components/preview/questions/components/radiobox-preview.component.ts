import { Component } from '@angular/core';
import {SinglePreviewComponent} from "./abstract/single-preview.component";

@Component({
  selector: 'radiobox-preview',
  templateUrl: '../templates/radiobox-preview.component.html',
})
export class RadioboxPreviewComponent extends SinglePreviewComponent{
}

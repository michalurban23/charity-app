import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { SurveyChooseComponent } from './components/survey-choose/survey-choose.component';
import {MatStepperModule} from '@angular/material/stepper';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { ContactCreateDialogComponent } from './components/survey-choose/contact-create-dialog/contact-create-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    MatStepperModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
  ],
  declarations: [MenuComponent, SurveyChooseComponent, ContactCreateDialogComponent],
  entryComponents: [ContactCreateDialogComponent]
})
export class MenuModule { }

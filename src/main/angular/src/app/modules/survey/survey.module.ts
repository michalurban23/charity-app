import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {SurveyComponent} from './components/survey/survey.component';
import {PanelComponent} from './components/panel/panel.component';
import {PreviewComponent} from './components/preview/preview.component';
import {InputTextGeneratorComponent} from './components/panel/generators/components/input-text-generator.component';
import {GeneratorComponent} from './components/panel/generators/generator.component';
import {TextareaGeneratorComponent} from './components/panel/generators/components/textarea-generator.component';
import {RadioboxGeneratorComponent} from './components/panel/generators/components/radiobox-generator.component';
import {CheckboxGeneratorComponent} from './components/panel/generators/components/checkbox-generator.component';
import {InputTextPreviewComponent} from './components/preview/questions/components/input-text-preview.component';
import {ChangeNameDialogComponent} from './components/preview/change-name-dialog/change-name-dialog.component';
import {QuestionComponent} from './components/preview/questions/question.component';
import { TextareaPreviewComponent } from './components/preview/questions/components/textarea-preview.component';
import { CheckboxPreviewComponent } from './components/preview/questions/components/checkbox-preview.component';
import {MatSnackBarModule} from '@angular/material';
import { RadioboxPreviewComponent } from './components/preview/questions/components/radiobox-preview.component';
import {SurveyService} from "../../services/survey-service/survey.service";


@NgModule({
  declarations: [
    SurveyComponent,
    PanelComponent,
    PreviewComponent,
    InputTextGeneratorComponent,
    GeneratorComponent,
    TextareaGeneratorComponent,
    RadioboxGeneratorComponent,
    CheckboxGeneratorComponent,
    InputTextPreviewComponent,
    QuestionComponent,
    ChangeNameDialogComponent,
    TextareaPreviewComponent,
    CheckboxPreviewComponent,
    RadioboxPreviewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatDividerModule,
    MatDialogModule,
    MatRadioModule,
    MatCheckboxModule,
  ],
  providers: [SurveyService],
  bootstrap: [SurveyComponent],
  entryComponents: [ChangeNameDialogComponent]
})
export class SurveyModule { }

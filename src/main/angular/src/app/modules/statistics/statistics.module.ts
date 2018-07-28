import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { SurveyAnswerComponent } from './components/survey-answer/survey-answer.component';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    FormsModule,
  ],
  declarations: [StatisticsComponent, SurveyAnswerComponent]
})
export class StatisticsModule { }

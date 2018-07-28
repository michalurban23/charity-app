import { RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {SurveyComponent} from "./modules/survey/components/survey/survey.component";
import {SurveyChooseComponent} from "./modules/menu/components/survey-choose/survey-choose.component";
import {MenuModule} from "./modules/menu/menu.module";
import {MenuComponent} from "./modules/menu/components/menu/menu.component";
import {SurveyModule} from "./modules/survey/survey.module";
import {AppComponent} from "./app.component";
import { HttpClientModule } from '@angular/common/http';
import {StatisticsModule} from "./modules/statistics/statistics.module";
import {StatisticsComponent} from "./modules/statistics/components/statistics/statistics.component";

const routes = [
  {path: 'survey', component: SurveyComponent},
  {path: 'choose', component: SurveyChooseComponent},
  {path: 'stats', component: StatisticsComponent},
  {path: '', component: MenuComponent},
];
@NgModule({
  imports: [
    MenuModule,
    SurveyModule,
    StatisticsModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [AppComponent],
  bootstrap: [ AppComponent ]
})
export class MainModule { }


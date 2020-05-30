import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AccentFoldPipe} from './pipes/accent-fold.pipe';
import {ToastyModule} from 'ng2-toasty';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenInterceptor} from './interceptor/token.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { PresentationComponent } from './gui/presentation/presentation.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { SigninComponent } from './gui/signin/signin.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppLanguage} from './app.language';
import {SigninLanguage} from './gui/signin/signin.language';
import {PresentationLanguage} from './gui/presentation/presentation.language';
import { DashboardComponent } from './gui/dashboard/dashboard.component';
import {DashboardLanguage} from './gui/dashboard/dashboard.language';
import { ProjectComponent } from './gui/project/project.component';
import {ProjectLanguage} from './gui/project/project.language';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import { BasicInputComponent } from './gui/project/steps/steps-type/basic-input/basic-input.component';
import {BasicInputLanguage} from './gui/project/steps/steps-type/basic-input/basic-input.language';
import {MatCardModule} from '@angular/material/card';
import { CommentComponent } from './gui/project/steps/comment/comment.component';
import { MoreInformationComponent } from './gui/project/steps/more-information/more-information.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {CommentLanguage} from './gui/project/steps/comment/comment.language';
import {MoreInformationLanguage} from './gui/project/steps/more-information/more-information.language';
import {StepsLanguage} from './gui/project/steps/steps.language';
import { LanguageSelectionComponent } from './gui/language-selection/language-selection.component';
import { ProjectCardComponent } from './gui/project-card/project-card.component';
import { NewCardComponent } from './gui/new-card/new-card.component';
import { NewProjectComponent } from './gui/new-project/new-project.component';
import { ProjectProgressComponent } from './gui/project-progress/project-progress.component';
import { Step1Component } from './gui/project/steps/step1/step1.component';
import { Step5Component } from './gui/project/steps/step5/step5.component';
import { Step6Component } from './gui/project/steps/step6/step6.component';
import { Step2Component } from './gui/project/steps/step2/step2.component';
import { Step3Component } from './gui/project/steps/step3/step3.component';
import { Step4Component } from './gui/project/steps/step4/step4.component';

@NgModule({
  declarations: [
    AppComponent,
    AccentFoldPipe,
    PresentationComponent,
    SigninComponent,
    DashboardComponent,
    ProjectComponent,
    BasicInputComponent,
    CommentComponent,
    MoreInformationComponent,
    LanguageSelectionComponent,
    ProjectCardComponent,
    NewCardComponent,
    NewProjectComponent,
    ProjectProgressComponent,
    Step1Component,
    Step5Component,
    Step6Component,
    Step2Component,
    Step3Component,
    Step4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastyModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    FormsModule,
    MatSidenavModule,
    MatTreeModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatSelectModule,
    MatChipsModule,
    MatRadioModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    AppLanguage,
    PresentationLanguage,
    SigninLanguage,
    DashboardLanguage,
    ProjectLanguage,
    BasicInputLanguage,
    CommentLanguage,
    MoreInformationLanguage,
    StepsLanguage
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

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
import { LoginComponent } from './gui/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { SigninComponent } from './gui/signin/signin.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppLanguage} from './app.language';
import {LoginLanguage} from './gui/login/login.language';
import {SigninLanguage} from './gui/signin/signin.language';
import {PresentationLanguage} from './gui/presentation/presentation.language';
import { DashboardComponent } from './gui/dashboard/dashboard.component';
import {DashboardLanguage} from './gui/dashboard/dashboard.language';
import { ProjectComponent } from './gui/project/project.component';
import {ProjectLanguage} from './gui/project/project.language';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import { BasicInputComponent } from './gui/project/steps-type/basic-input/basic-input.component';
import {BasicInputLanguage} from './gui/project/steps-type/basic-input/basic-input.language';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    AccentFoldPipe,
    PresentationComponent,
    LoginComponent,
    SigninComponent,
    DashboardComponent,
    ProjectComponent,
    BasicInputComponent
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
    MatIconModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    AppLanguage,
    PresentationLanguage,
    LoginLanguage,
    SigninLanguage,
    DashboardLanguage,
    ProjectLanguage,
    BasicInputLanguage
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

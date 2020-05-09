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
import {MatCardModule} from '@angular/material/card';
import { SigninComponent } from './gui/signin/signin.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppLanguage} from './app.language';
import {LoginLanguage} from './gui/login/login.language';
import {SigninLanguage} from './gui/signin/signin.language';
import {PresentationLanguage} from './gui/presentation/presentation.language';
import {MatIconModule} from '@angular/material/icon'

@NgModule({
  declarations: [
    AppComponent,
    AccentFoldPipe,
    PresentationComponent,
    LoginComponent,
    SigninComponent
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
    MatCardModule,
    FormsModule,
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
    SigninLanguage
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

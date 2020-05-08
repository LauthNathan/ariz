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
import { StepOneComponent } from './gui/project/step-one/step-one.component';
import { AReformulationComponent } from './gui/project/step-one/a-reformulation/a-reformulation.component';
import { BDefinitionComponent } from './gui/project/step-one/b-definition/b-definition.component';
import { CGraphicComponent } from './gui/project/step-one/c-graphic/c-graphic.component';
import { DChooseSchemaComponent } from './gui/project/step-one/d-choose-schema/d-choose-schema.component';
import { EIntensifyComponent } from './gui/project/step-one/e-intensify/e-intensify.component';
import { FFormulateComponent } from './gui/project/step-one/f-formulate/f-formulate.component';
import { GVerifyComponent } from './gui/project/step-one/g-verify/g-verify.component';
import {StepOneLanguage} from './gui/project/step-one/step-one.language';
import { DashboardComponent } from './gui/dashboard/dashboard.component';
import {DashboardLanguage} from './gui/dashboard/dashboard.language';
import { ProjectComponent } from './gui/project/project.component';
import {ProjectLanguage} from './gui/project/project.language';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {AReformulationLanguage} from './gui/project/step-one/a-reformulation/a-reformulation.language';
import {BDefinitionLanguage} from './gui/project/step-one/b-definition/b-definition.language';
import {CGraphicLanguage} from './gui/project/step-one/c-graphic/c-graphic.language';
import {DChooseSchemaLanguage} from './gui/project/step-one/d-choose-schema/d-choose-schema.language';
import {EIntensifyLanguage} from './gui/project/step-one/e-intensify/e-intensify.language';
import {FFormulateLanguage} from './gui/project/step-one/f-formulate/f-formulate.language';
import {GVerifyLanguage} from './gui/project/step-one/g-verify/g-verify.language';

@NgModule({
  declarations: [
    AppComponent,
    AccentFoldPipe,
    PresentationComponent,
    LoginComponent,
    SigninComponent,
    StepOneComponent,
    AReformulationComponent,
    BDefinitionComponent,
    CGraphicComponent,
    DChooseSchemaComponent,
    EIntensifyComponent,
    FFormulateComponent,
    GVerifyComponent,
    DashboardComponent,
    ProjectComponent
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
    StepOneLanguage,
    DashboardLanguage,
    ProjectLanguage,
    AReformulationLanguage,
    BDefinitionLanguage,
    CGraphicLanguage,
    DChooseSchemaLanguage,
    EIntensifyLanguage,
    FFormulateLanguage,
    GVerifyLanguage
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

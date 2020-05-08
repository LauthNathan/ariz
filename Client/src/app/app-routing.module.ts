import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PresentationComponent} from './gui/presentation/presentation.component';
import {LoginComponent} from './gui/login/login.component';
import {SigninComponent} from './gui/signin/signin.component';
import {DashboardComponent} from './gui/dashboard/dashboard.component';
import {ProjectComponent} from './gui/project/project.component';
import {AReformulationComponent} from './gui/project/step-one/a-reformulation/a-reformulation.component';
import {BDefinitionComponent} from './gui/project/step-one/b-definition/b-definition.component';
import {CGraphicComponent} from './gui/project/step-one/c-graphic/c-graphic.component';
import {DChooseSchemaComponent} from './gui/project/step-one/d-choose-schema/d-choose-schema.component';
import {EIntensifyComponent} from './gui/project/step-one/e-intensify/e-intensify.component';
import {FFormulateComponent} from './gui/project/step-one/f-formulate/f-formulate.component';
import {GVerifyComponent} from './gui/project/step-one/g-verify/g-verify.component';
import {StepOneComponent} from './gui/project/step-one/step-one.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'presentation',
    pathMatch: 'full'
  },
  {
    path: 'presentation',
    component: PresentationComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'project',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'project/:id',
    component: ProjectComponent,
    children: [
      {
        path: '',
        redirectTo: 'one/one',
        pathMatch: 'full'
      },
      {
        path: 'one',
        component: StepOneComponent
      },
      {
        path: 'one/one',
        component: AReformulationComponent
      },
      {
        path: 'one/two',
        component: BDefinitionComponent
      },
      {
        path: 'one/three',
        component: CGraphicComponent
      },
      {
        path: 'one/four',
        component: DChooseSchemaComponent
      },
      {
        path: 'one/five',
        component: EIntensifyComponent
      },
      {
        path: 'one/six',
        component: FFormulateComponent
      },
      {
        path: 'one/seven',
        component: GVerifyComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

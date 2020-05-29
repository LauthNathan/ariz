import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PresentationComponent} from './gui/presentation/presentation.component';
import {SigninComponent} from './gui/signin/signin.component';
import {DashboardComponent} from './gui/dashboard/dashboard.component';
import {ProjectComponent} from './gui/project/project.component';
import {BasicInputComponent} from './gui/project/steps/steps-type/basic-input/basic-input.component';
import {Step1Component} from './gui/project/steps/step1/step1.component';
import {Step5Component} from './gui/project/steps/step5/step5.component';
import {Step6Component} from './gui/project/steps/step6/step6.component';


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
        path: 'one/one',
        data: {step: 1, subStep: 1},
        component: Step1Component
      },
      {
        path: 'one/two',
        component: BasicInputComponent
      },
      {
        path: 'one/three',
        component: BasicInputComponent
      },
      {
        path: 'one/four',
        component: BasicInputComponent
      },
      {
        path: 'one/five',
        component: Step5Component
      },
      {
        path: 'one/six',
        component: Step6Component
      },
      {
        path: 'one/seven',
        component: BasicInputComponent
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

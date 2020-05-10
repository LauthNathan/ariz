import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PresentationComponent} from './gui/presentation/presentation.component';
import {SigninComponent} from './gui/signin/signin.component';
import {DashboardComponent} from './gui/dashboard/dashboard.component';
import {ProjectComponent} from './gui/project/project.component';
import {BasicInputComponent} from './gui/project/steps/steps-type/basic-input/basic-input.component';


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
        component: BasicInputComponent
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
        component: BasicInputComponent
      },
      {
        path: 'one/six',
        component: BasicInputComponent
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

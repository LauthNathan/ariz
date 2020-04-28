import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PresentationComponent} from './gui/presentation/presentation.component';
import {LoginComponent} from './gui/login/login.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

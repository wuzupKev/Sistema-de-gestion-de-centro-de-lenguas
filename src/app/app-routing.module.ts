import { ApplicationInitStatus, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './admin-view/landing/landing.component';
import { LoginComponent } from './admin-view/login/login.component';
import { RequestsComponent } from './admin-view/requests/requests.component';

import { HeaderComponent } from './admin-view/plantillas/header/header.component';
import { LayoutComponent } from './admin-view/plantillas/layout/layout.component';

import { RegistrationComponent } from './admin-view/ventanas/registration/registration.component';
import { ListComponent } from './admin-view/ventanas/list/list.component';
import { ScheduleComponent } from './admin-view/ventanas/schedule/schedule.component';
import { CursosComponent } from './admin-view/ventanas/cursos/cursos.component';
import { UserViewComponent } from './admin-view/ventanas/user-view/user-view.component';

import { ApplicationsComponent } from './admin-view/applications/applications.component';
import { AllowsComponent } from './admin-view/allows/allows.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'requests', component: RequestsComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'applications', component: ApplicationsComponent },
      { path: 'registration', component: RegistrationComponent },
      { path: 'list', component: ListComponent },
      { path: 'schedule', component: ScheduleComponent },
      { path: 'cursos', component: CursosComponent },
      { path: 'user-view', component: UserViewComponent },
      { path: 'user-view/:idusers', component: UserViewComponent },
      { path: 'allows/:id', component: AllowsComponent },
    ]
  },
  { path: '**', redirectTo: 'landing' },
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

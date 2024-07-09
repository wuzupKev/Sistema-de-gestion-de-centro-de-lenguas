import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { LandingComponent } from './admin-view/landing/landing.component';
import { LoginComponent } from './admin-view/login/login.component';
import { RequestsComponent } from './admin-view/requests/requests.component';

import { UserViewComponent } from './admin-view/ventanas/user-view/user-view.component';

import { HeaderComponent } from './admin-view/plantillas/header/header.component';
import { LayoutComponent } from './admin-view/plantillas/layout/layout.component';
import { FooterComponent } from './admin-view/plantillas/footer/footer.component';
import { SidebarComponent } from './admin-view/plantillas/sidebar/sidebar.component';
import { Header2Component } from './admin-view/plantillas/header2/header2.component';

import { CursosComponent } from './admin-view/ventanas/cursos/cursos.component';
import { ListComponent } from './admin-view/ventanas/list/list.component';
import { RegistrationComponent } from './admin-view/ventanas/registration/registration.component';
import { ScheduleComponent } from './admin-view/ventanas/schedule/schedule.component';
import { ApplicationsComponent } from './admin-view/applications/applications.component';
import { AllowsComponent } from './admin-view/allows/allows.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    FooterComponent,
    SidebarComponent,
    CursosComponent,
    ListComponent,
    RegistrationComponent,
    RequestsComponent,
    ScheduleComponent,
    Header2Component,
    LoginComponent,
    LandingComponent,
    UserViewComponent,
    ApplicationsComponent,
    AllowsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,ReactiveFormsModule,RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

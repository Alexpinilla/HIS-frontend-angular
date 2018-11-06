import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GuardService } from './guard.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PatientsComponent } from './patients/patients.component';
import { HistoriesComponent } from './histories/histories.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewUserComponent } from './new-user/new-user.component';
import { Router2Module } from './router2/router2.module';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component' ;
import { StateManagerService } from './state-manager.service';
import { LogeadoComponent } from './logeado/logeado.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HistoriesDetailsComponent } from './histories-details/histories-details.component';
import { GetNameFromUidPipe } from './get-name-from-uid.pipe';
import { ApiService } from './api.service';
import { HashLocationStrategy } from '@angular/common';
import { MiHistoriaComponent } from './mi-historia/mi-historia.component';
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PatientsComponent,
    HistoriesComponent,
    DashboardComponent,
    NewUserComponent,
    NavComponent,
    HeaderComponent,
    LogeadoComponent,
    UserDetailsComponent,
    HistoriesDetailsComponent,
    GetNameFromUidPipe,
    MiHistoriaComponent,
    MiPerfilComponent,
  ],
  imports: [
    BrowserModule,
    Router2Module,
    FormsModule,
  ],
  providers: [GuardService, StateManagerService,ApiService,HashLocationStrategy],
  bootstrap: [AppComponent]
})
export class AppModule { }


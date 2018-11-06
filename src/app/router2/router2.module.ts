import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { HistoriesComponent } from '../histories/histories.component';
import { PatientsComponent } from '../patients/patients.component';
import { NewUserComponent } from '../new-user/new-user.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { GuardService } from '../guard.service';
import { HistoriesGuardService } from '../histories-guard.service';
import { PatientsGuardService } from '../patients-guard.service';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { HistoriesDetailsComponent } from '../histories-details/histories-details.component';
import { MiHistoriaComponent } from '../mi-historia/mi-historia.component';
import { MiPerfilComponent } from '../mi-perfil/mi-perfil.component';

const routes: Routes = [{
  path: '',
  component: LoginComponent,
  pathMatch: 'full'
},{
  path: 'histories',
  component: HistoriesComponent,
  canActivate: [HistoriesGuardService]
},{
  path: 'histories/:uid',
  component: HistoriesDetailsComponent,
},{
  path: 'user/:uid',
  component: UserDetailsComponent,
},{
  path: 'patients',
  component: PatientsComponent,
  canActivate: [PatientsGuardService]
},{
  path: 'mi-historia',
  component: MiHistoriaComponent,
},{
  path: 'profile',
  component: MiPerfilComponent
},{
  path: 'new-user',
  component: NewUserComponent,
}]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {enableTracing: true})

  ],
  exports: [ RouterModule],
  declarations: []
})
export class Router2Module { }

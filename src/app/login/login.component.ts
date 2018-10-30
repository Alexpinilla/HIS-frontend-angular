import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataServiceService } from '../data-service.service';
import { StateManagerService } from '../state-manager.service';
import { LogeadoComponent} from '../logeado/logeado.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [DataServiceService, StateManagerService]
})
export class LoginComponent {


  constructor(public stateManager: StateManagerService) { 
     }
     modelUsuario;
     modelPass;

}

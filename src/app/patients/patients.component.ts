import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { StateManagerService } from '../state-manager.service';
import { ApiService } from '../api.service'
@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
  providers: [ DataServiceService ]

})
export class PatientsComponent {

  constructor(private stateManager: StateManagerService, private api: ApiService  ) {
    localStorage.setItem('ocultar', 'oculto')

  }
  users = this.api.users;
  patients;

}

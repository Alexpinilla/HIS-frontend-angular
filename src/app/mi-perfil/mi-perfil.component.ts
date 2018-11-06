import { Component, OnInit } from '@angular/core';
import { StateManagerService } from '../state-manager.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent {

  arrayUser: any
  uidUser = localStorage.getItem('uidUser')
  constructor(private stateManager: StateManagerService, private api: ApiService) {
      this.arrayUser = this.stateManager.getUserFromUid(this.uidUser)
    
  }
  name; surname; dni; username; role; sip
}

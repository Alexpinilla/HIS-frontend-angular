import { Component, OnInit } from '@angular/core';
import { StateManagerService } from '../state-manager.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user.interface';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

  arrayUser: any
  uidUser;
  constructor(private ruta: ActivatedRoute, private stateManager: StateManagerService, private api: ApiService) {
    this.ruta.params.subscribe(params => {
      this.uidUser = (params['uid'])
      this.arrayUser = this.stateManager.getUserFromUid(this.uidUser)
      console.log(this.arrayUser)
    })
  }
  name; surname; dni; username; role; sip
}

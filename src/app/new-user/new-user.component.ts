import { Component, OnInit } from '@angular/core';
import { StateManagerService } from '../state-manager.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  roles = ['admin', 'patient', 'doctor', 'technical'];

  constructor(public stateManager: StateManagerService) { }

  ngOnInit() {
  }
  modelRole;
  modelUid;
  modelName;
  modelSurname;
  modelDni;
  modelUsuario;
  modelPass;
  
}

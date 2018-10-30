import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { StateManagerService } from '../state-manager.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {

  constructor(public stateManager: StateManagerService) {
  }

}
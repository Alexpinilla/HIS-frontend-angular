import { Component, OnInit } from '@angular/core';
import { StateManagerService } from '../state-manager.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-mi-historia',
  templateUrl: './mi-historia.component.html',
  styleUrls: ['./mi-historia.component.css']
})
export class MiHistoriaComponent implements OnInit {

  uidHistory =localStorage.getItem('uidUser')
  array: string[];
  constructor( public stateManager: StateManagerService, private api: ApiService) {
      this.array = this.stateManager.getHistoriesIds(localStorage.getItem('uidUser'))
      localStorage.setItem('ocultar', 'oculto')
    }
  
  usuario = this.stateManager.getNameFromUid(localStorage.getItem('uidUser'));
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { StateManagerService } from '../state-manager.service';

@Component({
  selector: 'app-logeado',
  templateUrl: './logeado.component.html',
  styleUrls: ['./logeado.component.css'],
  providers: [DataServiceService, StateManagerService]

})
export class LogeadoComponent implements OnInit {

  constructor(private stateManager: StateManagerService) { /*
    this.stateManager.estado3().subscribe(usuarioLogeado => {
      console.log(usuarioLogeado);
      
      })*/
     }

  ngOnInit() {
  }


}

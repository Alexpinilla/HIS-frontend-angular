import { Component, OnInit } from '@angular/core';
import { StateManagerService } from '../state-manager.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-histories',
  templateUrl: './histories.component.html',
  styleUrls: ['./histories.component.css'],
  
})
export class HistoriesComponent implements OnInit{


  constructor(private stateManager: StateManagerService, private api: ApiService ) {
    
  }
   
  patients = this.api.patients;

  ngOnInit() {
  }

}

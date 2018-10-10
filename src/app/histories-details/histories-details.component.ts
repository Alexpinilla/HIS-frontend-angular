import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StateManagerService } from '../state-manager.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-histories-details',
  templateUrl: './histories-details.component.html',
  styleUrls: ['./histories-details.component.css']
})
export class HistoriesDetailsComponent implements OnInit {

  uidHistory;
  array: string[];
  constructor(private ruta: ActivatedRoute, private stateManager: StateManagerService, private api: ApiService) {
    this.ruta.params.subscribe(params =>{
      this.uidHistory = (params['uid'])
      this.array = this.stateManager.getHistoriesIds(this.uidHistory)
    })
  }
  usuario = this.stateManager.getNameFromUid(this.uidHistory);
  ngOnInit() {
  }

}

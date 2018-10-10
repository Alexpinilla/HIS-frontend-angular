import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoriesGuardService {

  constructor() { }
  canActivate() {
    var pasas = localStorage.getItem("rol")=="admin";
    return pasas;
}
}

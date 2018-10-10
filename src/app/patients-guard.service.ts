import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientsGuardService {

  constructor() { }
  canActivate(){
    return localStorage.getItem("rol")==="doctor" || localStorage.getItem("rol")==="admin";
  }
}
